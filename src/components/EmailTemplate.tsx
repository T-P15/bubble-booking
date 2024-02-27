type EmailTemplateProps = { email: string };

function EmailTemplate({ email }: EmailTemplateProps) {
  return (
    <div>
      <p>Hello {email}</p>
      <p>
        Thank you for subscribing. We will keep you up to date with the latest
        bubble announcements.
      </p>
      <p>
        If you have any questions or comments about the content you’re receiving
        please email back and we will respond to your inquiry promptly.
      </p>
      <p>Sincerely,</p>
      <p>Bubble</p>
    </div>
  );
}

export default EmailTemplate;
