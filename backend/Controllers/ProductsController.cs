using Microsoft.AspNetCore.Mvc;

namespace react_parcial_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        var products = new[]
        {
            new ProductDto(1, "Landing Page Pro", "Diseño moderno para páginas de aterrizaje.", 3500m, true),
            new ProductDto(2, "Tienda Virtual", "Solución web para catálogos y ventas en línea.", 8500m, true),
            new ProductDto(3, "Dashboard Empresarial", "Panel administrativo con gráficas y métricas.", 12500m, true),
            new ProductDto(4, "Sistema de Reservas", "Aplicación para gestionar reservas y disponibilidad.", 9800m, false)
        };

        return Ok(products);
    }
}

public record ProductDto(int Id, string Name, string Description, decimal Price, bool Available);
