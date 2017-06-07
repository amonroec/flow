<template>
    <div class="container login">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 login-form">
                    <div class="panel-header">
                        <h2 class="text-center">
                    <img src="../assets/img/pages/clear_black.png" alt="Logo">
                </h2>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-xs-12">
                                <form action="/" id="authentication" method="get" class="login_validator">
                                    <div class="form-group">
                                        <label for="email" class="sr-only"> E-mail</label>
                                        <input type="text" class="form-control  form-control-lg" id="email" name="username" placeholder="E-mail">
                                    </div>
                                    <div class="form-group">
                                        <label for="password" class="sr-only">Password</label>
                                        <input type="password" class="form-control form-control-lg" id="password" name="password" placeholder="Password">
                                    </div>
                                    <div class="form-group checkbox">
                                        <label for="remember">
                                            <input type="checkbox" name="remember" id="remember">&nbsp; Remember Me
                                        </label>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" value="Sign In" class="btn btn-primary btn-block" />
                                    </div>
                                    <a href="#/reset_password" id="forgot" class="forgot"> Forgot Password ? </a>
                                    <span class="pull-right sign-up">New ? <a href="#/register">Sign Up</a></span>
                                </form>
                            </div>
                        </div>
                        <div class="row text-center social">
                            <div class="col-xs-12">
                                <p class="alter">Sign in with</p>
                            </div>
                            <div class="row">
                                <div class="col-sm-8 col-sm-offset-2">
                                    <div class="col-xs-4">
                                        <a href="//facebook.com" class="btn btn-lg btn-facebook">
                                            <i class="ti-facebook"></i>
                                        </a>
                                    </div>
                                    <div class="col-xs-4">
                                        <a href="//twitter.com" class="btn btn-lg btn-twitter">
                                            <i class="ti-twitter-alt"></i>
                                        </a>
                                    </div>
                                    <div class="col-xs-4">
                                        <a href="//plus.google.com" class="btn btn-lg btn-google">
                                            <i class="ti-google"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import validator from "../vendors/bootstrapvalidator/dist/js/bootstrapValidator.min.js"
export default {
    name: "login",
    mounted: function() {
        "use strict";
        $(document).ready(function() {
            //=================Preloader===========//
            $(window).on('load', function() {
                $('.preloader img').fadeOut();
                $('.preloader').fadeOut();
            });
            //=================end of Preloader===========//
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_minimal-blue',
                increaseArea: '20%' // optional
            });
            $("#authentication").bootstrapValidator({
                fields: {
                    username: {
                        validators: {
                            notEmpty: {
                                message: 'The email address is required'
                            },
                            regexp: {
                                regexp: /^\S+@\S{1,}\.\S{1,}$/,
                                message: 'Please enter valid email format'
                            }
                        }
                    },
                    password: {
                        validators: {
                            notEmpty: {
                                message: 'Password is required'
                            }

                        }
                    }

                }
            });

        });
    },
    destroyed: function() {

    }
}
</script>
<style src="../vendors/bootstrapvalidator/dist/css/bootstrapValidator.min.css"></style>
<style src="../assets/css/login.css" scoped></style>
<style type="text/css" scoped>
div.container.login {
    padding-top: 6.5%;
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: radial-gradient(ellipse at center, #5A93AF 0%, #004E74 100%);
    overflow-y: auto;
}
</style>
