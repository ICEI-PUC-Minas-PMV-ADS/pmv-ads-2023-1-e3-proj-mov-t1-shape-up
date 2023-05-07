using System.Text.Json;

namespace ShapeUpBackendApi.Authentication.Contracts.Refresh {
    public class RefreshTokenContent {
        public string? Token { get; set; }
        public string? RefreshToken { get; set; }
        public string ToJson() {
            return JsonSerializer.Serialize(this);
        }
    }
}
