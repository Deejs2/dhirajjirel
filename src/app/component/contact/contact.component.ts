import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;

  faEnvelopeIcon = faEnvelope;
  faPhoneIcon = faPhone;
  faLocationDotIcon = faLocationDot;
  faPaperPlaneIcon = faPaperPlane;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    } 

    // send mail
    this.sendEmail();
  }

  sendEmail() {
    emailjs
      .send(
        'service_5mb8sim', // Service ID
        'template_do6etju', // Template ID
        {
          user_name: this.contactForm.value.name,
          user_email: this.contactForm.value.email,
          message: this.contactForm.value.message,
          reply_to: this.contactForm.value.email
        },
        'YoIN2p1bBDznbvuDN' // Public Key
      )
      .then(
        (response) => {
          alert('Email sent successfully!');
          console.log('Email sent successfully!', response.status, response.text);
        },
        (err) => {
          console.error('Failed to send email', err);
        }
      );
  }
}