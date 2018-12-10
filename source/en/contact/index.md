---
layout: generic
lang: en
title: Contact
lead: For questions about Handshake, the Alliance, or any of our products, drop us a line below.
date: 2018-08-21 16:26:02
categories:
tags:
---

<div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-8 align-self-center">
      <br><br>
      <form name="contact" method="POST"><input type="hidden" name="form-name" value="contact" data-netlify-recaptcha>
        <div class="form-group">
          <label for="name">Name</label>
          <input id="contact-name" name="name" type="text" class="form-control" required autofocus>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="contact-email" name="email" type="email" class="form-control" required="">
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="contact-message" name="message" type="text" class="form-control" required=""></textarea>
        </div>
        <input type="submit" value="Send" class="btn btn-primary">
      </form>
      <br><br>
    </div>
  </div>
</div>
