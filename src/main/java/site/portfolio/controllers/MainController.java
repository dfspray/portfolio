package site.portfolio.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	  @RequestMapping("/home")
	  public String home() {
	    return "html/home.html";
	  }
	  
	  @RequestMapping("/about")
	  public String about() {
	    return "html/about.html";
	  }
	  
	  @RequestMapping("/resume")
	  public String resume() {
	    return "html/resume.html";
	  }
}
