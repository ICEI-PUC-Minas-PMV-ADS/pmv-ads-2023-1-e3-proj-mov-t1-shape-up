FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["ShapeUpBackendApi/ShapeUpBackendApi.csproj", "ShapeUpBackendApi/"]
RUN dotnet restore "ShapeUpBackendApi/ShapeUpBackendApi.csproj"
COPY . .
WORKDIR "/src/ShapeUpBackendApi"
RUN dotnet build "ShapeUpBackendApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ShapeUpBackendApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet ShapeUpBackendApi.dll