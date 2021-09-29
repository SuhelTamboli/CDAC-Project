package com.app.exc_handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.app.custom_excs.AdminErrorHandlingException;
import com.app.custom_excs.BankAccountHandlingException;
import com.app.custom_excs.CustomerHandlingException;
import com.app.custom_excs.ResourceNotFoundException;
import com.app.dto.ErrorResponse;

@ControllerAdvice
	public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
		//exc handling method/s :
			@ExceptionHandler(CustomerHandlingException.class)
			public ResponseEntity<ErrorResponse> handleCustomerHandlingException(CustomerHandlingException e) {
				System.out.println("in handle customer exc");
				return new ResponseEntity<>(new ErrorResponse("Invalid Login", e.getMessage()),
						 HttpStatus.UNAUTHORIZED);
			}
			
			@ExceptionHandler(BankAccountHandlingException.class)
			public ResponseEntity<ErrorResponse> handleBankAccountHandlingException(BankAccountHandlingException e) {
				System.out.println("in handle acct exc");
				return new ResponseEntity<>(new ErrorResponse("Owner Related error",e.getMessage()),
						 HttpStatus.BAD_REQUEST);
			}
			//catch all -- equivalent
			@ExceptionHandler(Exception.class)
			public ResponseEntity<ErrorResponse> handleException(Exception e) {
				System.out.println("in handle any exc");
				return new ResponseEntity<>(new ErrorResponse("Servr side error !!!!",e.getMessage()),
						 HttpStatus.INTERNAL_SERVER_ERROR);
			}
			@ExceptionHandler( ResourceNotFoundException.class)
			public ResponseEntity<ErrorResponse> ResourceNotFoundException( ResourceNotFoundException e) {
				System.out.println("in handle resource not found  exc");
				return new ResponseEntity<>(new ErrorResponse("Userid is invalid  !!!!",e.getMessage()),
						 HttpStatus.UNAUTHORIZED);
			}
	}
