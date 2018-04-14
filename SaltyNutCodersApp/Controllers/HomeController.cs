using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace SaltyNutCodersApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var cookieOptions = new CookieOptions()
            {
                Expires = DateTime.Now.AddDays(365)
            };
            var guid = Guid.NewGuid();
            HttpContext.Response.Cookies.Append("userId", guid.ToString(), cookieOptions);
            return View();
        }
    }
}
