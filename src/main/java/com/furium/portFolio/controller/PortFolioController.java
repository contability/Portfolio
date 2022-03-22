package com.furium.portFolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PortFolioController {
	
	@RequestMapping(value = "/portfolio.go", method = RequestMethod.GET)
	public String portfolio() {
		return "portFolio";
	}
}
