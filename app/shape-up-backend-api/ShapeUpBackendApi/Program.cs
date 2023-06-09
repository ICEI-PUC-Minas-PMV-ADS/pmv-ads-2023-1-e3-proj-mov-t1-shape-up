using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using ShapeUpBackendApi.Authentication.Repositories;
using ShapeUpBackendApi.Authentication.Services;
using ShapeUpBackendApi.Data;
using ShapeUpBackendApi.Training.Repositories;
using ShapeUpBackendApi.Training.Services;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<TokenService>();
builder.Services.AddScoped<PasswordService>();
builder.Services.AddScoped<UserRepository>();
builder.Services.AddScoped<ExerciseRepository>();
builder.Services.AddScoped<WorkoutRepository>();
builder.Services.AddScoped<TrainingGeneratorService>();
builder.Services.AddScoped<RefreshTokenRepository>();
builder.Services.AddDbContext<ApplicationDBContext>(options => {
    options.UseNpgsql(builder.Configuration.GetConnectionString("Default"));
});
builder.Services.AddCors(options => {
    options.AddPolicy("AllowAll", builder => {
        builder
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

builder.Services.AddAuthentication(opt => {
    opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(opt => {
    opt.RequireHttpsMetadata = false;
    opt.SaveToken = true;
    opt.TokenValidationParameters = new TokenValidationParameters {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(builder.Configuration["JWT:SecretKey"])),
        ValidateIssuer = false,
        ValidateAudience = false,
        ValidateLifetime = false,
    };
});

var app = builder.Build();

if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI();
}

using (var scope = app.Services.CreateScope()) {
    var services = scope.ServiceProvider;

    var context = services.GetRequiredService<ApplicationDBContext>();
    if (context.Database.GetPendingMigrations().Any()) {
        context.Database.Migrate();
    }
}

app.UseCors("AllowAll");
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();