using System.ComponentModel.DataAnnotations;

namespace ShapeUpBackendApi.Authentication.Models {
    public class RefreshToken {
        [Key]
        public string Username { get; set; }
        public string Token { get; set; }
        public override string ToString() => Token;
    }
}
