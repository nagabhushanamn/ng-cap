import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  isOpen: boolean = false;
  reviewForm: FormGroup

  @Output() onNewReview = new EventEmitter()

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reviewForm = this.fb.group({
      stars: [5],
      author: ['', [Validators.required, Validators.email]],
      body: ['', Validators.required]
    });
  }

  toggleForm() {
    this.isOpen = !this.isOpen
  }
  submitNewReview() {
    if (this.reviewForm.valid) {
      let formData = this.reviewForm.value;
      this.onNewReview.emit(formData);
      this.toggleForm();
    }
  }

}
