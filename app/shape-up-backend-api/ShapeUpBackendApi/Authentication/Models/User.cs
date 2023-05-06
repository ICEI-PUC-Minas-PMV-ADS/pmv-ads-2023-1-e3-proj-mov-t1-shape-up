using ShapeUpBackendApi.Authentication.Contracts.Register;

namespace ShapeUpBackendApi.Authentication.Models {
    public class User {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string ImageUrl { get; set; }
    }
}
