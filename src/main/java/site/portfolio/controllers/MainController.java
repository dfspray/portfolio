package site.portfolio.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	  @RequestMapping("/")
	  public String redirect() {
	    return "redirect:resume";
	  }

	  @RequestMapping("/home")
	  public String home() {
		  return "redirect:resume";
	  }
	  
	  @RequestMapping("/resume")
	  public String resume() {
	    return "html/resume.html";
	  }
	  
	  @RequestMapping("/about")
	  public String about() {
		  return "html/about.html";
	  }

	  @RequestMapping("/contact")
	  public String contact() {
		  return "html/contact.html";
	  }
	  
	  @RequestMapping("/projects")
	  public String projects() {
		  return "html/projects.html";
	  }
}
