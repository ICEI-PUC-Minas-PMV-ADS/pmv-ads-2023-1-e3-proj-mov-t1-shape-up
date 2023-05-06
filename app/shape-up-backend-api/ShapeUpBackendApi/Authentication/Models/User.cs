using Microsoft.EntityFrameworkCore.Metadata.Internal;
using ShapeUpBackendApi.Authentication.Contracts.Register;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShapeUpBackendApi.Authentication.Models {
    public class User {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        [Column(TypeName = "nullable")]
        public string? ImageUrl { get; set; }
    }
}
