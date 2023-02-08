import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPressComponent } from './word-press.component';

describe('WordPressComponent', () => {
  let component: WordPressComponent;
  let fixture: ComponentFixture<WordPressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordPressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
