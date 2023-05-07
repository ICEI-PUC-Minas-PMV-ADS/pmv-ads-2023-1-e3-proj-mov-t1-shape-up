using System.Text.Json;

namespace ShapeUpBackendApi.Authentication.Contracts.CheckToken {
    public class CheckTokenResponse {
        public bool IsValid { get; set; }
        public bool IsExpired { get; set; }
        public string ToJson() {
            return JsonSerializer.Serialize(this);
        }
    }
}
