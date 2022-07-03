package com.spring.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.spring.backend.model.User;
import com.spring.backend.repository.UserRepository;



@SpringBootApplication
public class BackendApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	
	@Autowired
	private UserRepository userRepository;
	
	
	@Override
	public void run(String... args) throws Exception{
		this.userRepository.save(new User("Amos", "TINA NFON", "amostinanfon17@gmail.com"));
		this.userRepository.save(new User("josephine", "Mbatchou Mballa", "josephinembatchoumballa@yahoo.fr"));
		this.userRepository.save(new User("albert", "mbende ntombi", "albertmbedentombi@hotmail.com"));
		this.userRepository.save(new User("thomas", "NFON NFON", "thomasnfonnfon@wanadoo.fr"));
	}

}
