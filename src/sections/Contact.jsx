import { useState } from 'react';
import Button from '../components/Button.jsx';
import './Contact.css';

const INITIAL_FORM = {
  name: '',
  email: '',
  category: '',
  date: '',
  location: '',
  guestCount: '',
  budget: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Google Form submission target + field entry IDs
const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSdwUiEBTEIzmsAPkyy3oIaS2-q16jZZXbZL2H62A5mL76nUYA/formResponse';

const ENTRY_IDS = {
  name: 'entry.1110480427',
  email: 'entry.1251926588',
  category: 'entry.1598349110',
  date: 'entry.2045229834',
  location: 'entry.620184052',
  guestCount: 'entry.869065653',
  budget: 'entry.552190387',
  message: 'entry.2032973371',
};

const CATEGORY_LABELS = {
  corporate: 'Corporate event',
  social: 'Social celebration',
  other: 'Other',
};

function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = 'Name is required.';
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_PATTERN.test(form.email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (!form.category) {
    errors.category = 'Select an event category.';
  }

  if (!form.date) {
    errors.date = 'Tentative date is required.';
  }

  if (!form.location.trim()) {
    errors.location = 'Event location is required.';
  }

  if (!form.guestCount) {
    errors.guestCount = 'Approximate guest count is required.';
  } else if (Number(form.guestCount) <= 0) {
    errors.guestCount = 'Enter a number greater than 0.';
  }

  return errors;
}

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (status === 'submitting') {
      // Guard against a second submit firing while the first is still
      // in flight (e.g. double-click) — this was the root cause of
      // submissions silently cancelling each other earlier.
      return;
    }

    setStatus('submitting');

    const fieldValues = {
      [ENTRY_IDS.name]: form.name,
      [ENTRY_IDS.email]: form.email,
      [ENTRY_IDS.category]: CATEGORY_LABELS[form.category] || form.category,
      [ENTRY_IDS.date]: form.date,
      [ENTRY_IDS.location]: form.location,
      [ENTRY_IDS.guestCount]: form.guestCount,
      [ENTRY_IDS.budget]: form.budget,
      [ENTRY_IDS.message]: form.message,
    };

    // Google Forms rejects fetch()'s no-cors POST with 400 (it expects a
    // real form submission, not an XHR-style request), so we submit via
    // a genuine hidden <form> targeting a hidden <iframe> instead. The
    // button is disabled while status is 'submitting' (see JSX below) so
    // a second submission can't start before this one's navigation
    // finishes and cancel it.
    const tempForm = document.createElement('form');
    tempForm.action = GOOGLE_FORM_ACTION;
    tempForm.method = 'POST';
    tempForm.target = 'hidden-google-form-frame';

    for (const [key, value] of Object.entries(fieldValues)) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      tempForm.appendChild(input);
    }

    document.body.appendChild(tempForm);
    tempForm.submit();
    document.body.removeChild(tempForm);

    // Google gives no readable confirmation (opaque cross-origin
    // response), so we wait for the navigation to settle, then treat it
    // as sent. The disabled button above is what actually prevents the
    // previous race — this delay just avoids showing success too early.
    setTimeout(() => {
      setStatus('success');
      setForm(INITIAL_FORM);
    }, 1000);
  }

  if (status === 'success') {
    return (
      <section id="contact" className="contact">
        <div className="contact__success" role="status">
          <h2 className="contact__success-title">Inquiry sent</h2>
          <p className="contact__success-text">
            Your event details have been submitted. We'll follow up by email
            to schedule a consultation.
          </p>
          <button className="contact__reset" onClick={() => setStatus('idle')}>
            Submit another inquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__header">
        <span className="contact__eyebrow">Get in touch</span>
        <h2 className="contact__title">Tell us about your event.</h2>
        <p className="contact__intro">
          Share a few details and we'll follow up to schedule a consultation.
        </p>
      </div>

      <form className="contact__form" onSubmit={handleSubmit} noValidate>
        <div className="contact__field">
          <label htmlFor="name" className="contact__label">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="contact__input"
            value={form.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <span id="name-error" className="contact__error">
              {errors.name}
            </span>
          )}
        </div>

        <div className="contact__field">
          <label htmlFor="email" className="contact__label">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="contact__input"
            value={form.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <span id="email-error" className="contact__error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="contact__field">
          <label htmlFor="category" className="contact__label">
            Event category <span aria-hidden="true">*</span>
          </label>
          <select
            id="category"
            name="category"
            className="contact__input"
            value={form.category}
            onChange={handleChange}
            aria-invalid={Boolean(errors.category)}
            aria-describedby={errors.category ? 'category-error' : undefined}
          >
            <option value="">Select one</option>
            <option value="corporate">Corporate event</option>
            <option value="social">Social celebration</option>
            <option value="other">Other</option>
          </select>
          {errors.category && (
            <span id="category-error" className="contact__error">
              {errors.category}
            </span>
          )}
        </div>

        <div className="contact__row">
          <div className="contact__field">
            <label htmlFor="date" className="contact__label">
              Tentative date <span aria-hidden="true">*</span>
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className="contact__input"
              value={form.date}
              onChange={handleChange}
              aria-invalid={Boolean(errors.date)}
              aria-describedby={errors.date ? 'date-error' : undefined}
            />
            {errors.date && (
              <span id="date-error" className="contact__error">
                {errors.date}
              </span>
            )}
          </div>

          <div className="contact__field">
            <label htmlFor="guestCount" className="contact__label">
              Guest count <span aria-hidden="true">*</span>
            </label>
            <input
              id="guestCount"
              name="guestCount"
              type="number"
              min="1"
              className="contact__input"
              value={form.guestCount}
              onChange={handleChange}
              aria-invalid={Boolean(errors.guestCount)}
              aria-describedby={errors.guestCount ? 'guestCount-error' : undefined}
            />
            {errors.guestCount && (
              <span id="guestCount-error" className="contact__error">
                {errors.guestCount}
              </span>
            )}
          </div>
        </div>

        <div className="contact__field">
          <label htmlFor="location" className="contact__label">
            Event location <span aria-hidden="true">*</span>
          </label>
          <input
            id="location"
            name="location"
            type="text"
            className="contact__input"
            value={form.location}
            onChange={handleChange}
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? 'location-error' : undefined}
          />
          {errors.location && (
            <span id="location-error" className="contact__error">
              {errors.location}
            </span>
          )}
        </div>

        <div className="contact__field">
          <label htmlFor="budget" className="contact__label">
            Budget range <span className="contact__optional">(optional)</span>
          </label>
          <input
            id="budget"
            name="budget"
            type="text"
            className="contact__input"
            placeholder="e.g. ₹1,00,000 – ₹2,00,000"
            value={form.budget}
            onChange={handleChange}
          />
        </div>

        <div className="contact__field">
          <label htmlFor="message" className="contact__label">
            Message or vision <span className="contact__optional">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="contact__input contact__textarea"
            value={form.message}
            onChange={handleChange}
          />
        </div>

        {status === 'error' && (
          <p className="contact__error" role="alert">
            Something went wrong sending your inquiry. Please try again, or
            email us directly if this persists.
          </p>
        )}

        <Button type="submit" variant="primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Submitting...' : 'Submit inquiry'}
        </Button>

        <p className="contact__disclaimer">
          Submissions are sent directly to our team via Google Forms.
        </p>
      </form>

      <iframe
        name="hidden-google-form-frame"
        title="Form submission target"
        style={{ display: 'none' }}
      />
    </section>
  );
}

export default Contact;