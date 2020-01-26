package site.portfolio.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	  @RequestMapping("/")
	  public String redirect() {
	    return "redirect:home";
	  }

	  @RequestMapping("/home")
	  public String home() {
	    return "html/home.html";
	  }
	  
	  @RequestMapping("/resume")
	  public String resume() {
	    return "html/resume.html";
	  }
	  
	  @RequestMapping("/about")
	  public String about() {
		  return "html/about.html";
	  }
}
