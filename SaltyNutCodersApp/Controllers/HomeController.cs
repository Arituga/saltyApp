using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SaltyNutCodersApp.Models;
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

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
