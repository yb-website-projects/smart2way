import { htmlTemplate } from './html-template';

export const contactFormBody = () => {
  return htmlTemplate({
    body: `
      <div class="wrapper">
        <header style="height: 115px;">
          <img style="width: 696px; height: 115px" src="https://images2.imgbox.com/58/a2/C6oxCbtp_o.png" alt="full-logo" class="logo" />
        </header>
        <div class="main">
          <p style="font-size: 40px; font-weight: 400; text-transform: uppercase; color: #fff; margin-bottom: 40px;">Thank you for registering with Smart2Way!</p>
          <p class="text" style="margin-bottom: 20px;">Our support team will get in touch with you shortly. If you happen to miss our call, don’t worry — we will call you back at your convenience.</p>
          <p class="text" style="color: #fff; font-size: 16px; line-height: 24px; margin: 0;">Should you have any immediate questions, feel free to reach out to us at <a href="mailto:info@smart2way.io" style="color: #A7531C; text-decoration: underline; font-size: 16px; line-height: 24px;">info@smart2way.io</a>.</p>
          <p class="text" style="font-weight: 600; margin-top: 40px;">Best regards, <br/>The Smart2Way Team</p>
        </div>
        <footer>
          <img style="width: 696px; height: 90px" src="https://images2.imgbox.com/9a/46/4zz6IfvE_o.png" alt="full-logo" class="logoSm" />
        </footer>
      </div>
    `,
    style: `
      .wrapper {
        padding: 8px;
        width: 696px;
        margin: 0 auto;
        background: #ffffff;
      }
      
      .main {
        background: #000000;
        padding-top: 65px;
        padding-bottom: 86px;
        padding-left: 36px;
        padding-right: 36px;
      }
      
      .header {
        overflow: hidden;
      }
      
      .strong {
        font-weight: 600;
        color: #000;
      }
      
      .title {
        color: #000;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
       
      .heading {
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
       
      .text {
        color: #fff;
        font-size: 16px;
      }
      
      .logo {
        width: 159px;
        height: 40px;
      }
      
      .logoSm {
        width: 157px;
        height: 40px;
      }
      
      .footer {
        display: flex;
        border-radius: 12px;
        background: #FFE6E0;
        padding: 20px;
      }
    `,
  });
};
