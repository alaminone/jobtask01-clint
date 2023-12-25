import React from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import swal from 'sweetalert';
import useAppContext from '../../hooks/AppContext/useAppContext';
import usePublicApi from '../../hooks/publicapi/usePublicApi';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const formRef = useRef(null);
      const authentication = useAppContext();
      const { createUserWithEmail, profileUpdate, logOut } = authentication;
      const navigate = useNavigate();
      const publicApi = usePublicApi();
    
      const onSubmit = (data) => {
        const { username, url, password, email, occupation } = data;
        createUserWithEmail(email, password)
          .then((result) => {
            console.log(result);
    
            const formData = {
              username,
              email,
              occupation,
            };
            publicApi
              .post('/users', formData)
              .then((result) => console.log(result))
              .catch((error) => console.log(error));
    
            profileUpdate(username, url)
              .then((result) => {
                console.log(result);
                formRef.current.reset();
    
                logOut()
                  .then((result) => {
                    console.log(result);
                    swal('sign Up successfully', 'Please login', 'success');
                    navigate('/login');
                  })
                  .catch((error) => console.log(error));
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      };
      return (
        <div>
          <SectionTitle heading="register page" subHeading="create your account" />
    
          <div className="flex justify-center items-center my-20">
            <div className="bg-colorTwo rounded-lg">
              <form
                className="m-[5rem]"
                onSubmit={handleSubmit(onSubmit)}
                ref={formRef}
              >
                <div className="form-control my-8">
                  <label className="label">
                    <span className="font-lora text-2xl uppercase font-semibold tracking-widest">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="User name"
                    className="outline-none border-[2px] border-lightOne p-4 rounded-lg font-poppins text-2xl"
                    {...register('username', { required: true })}
                  />
                  {errors.username && (
                    <span className="font-poppins p-2 text-sm text-red-600 font-light">
                      Display name Field is required
                    </span>
                  )}
                </div>
                {/* PhotoUrl */}
                <div className="form-control my-8">
                  <label className="label">
                    <span className="font-lora text-2xl uppercase font-semibold tracking-widest">
                      Photo Url
                    </span>
                  </label>
                  <input
                    type="url"
                    placeholder="Photo URL"
                    className="outline-none border-[2px] border-lightOne p-4 rounded-lg font-poppins text-2xl"
                    {...register('url', { required: true })}
                  />
                  {errors.url && (
                    <span className="font-poppins p-2 text-sm text-red-600 font-light">
                      Photo Url Field is required
                    </span>
                  )}
                </div>
                {/* Email */}
                <div className="form-control my-8">
                  <label className="label">
                    <span className="font-lora text-2xl uppercase font-semibold tracking-widest">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="outline-none border-[2px] border-lightOne p-4 rounded-lg font-poppins text-2xl"
                    {...register('email', { required: true })}
                  />
                  {errors.email && (
                    <span className="font-poppins p-2 text-sm text-red-600 font-light">
                      Email Field is required
                    </span>
                  )}
                </div>
                {/* Password */}
                <div className="form-control my-8">
                  <label className="label">
                    <span className="font-lora text-2xl uppercase font-semibold tracking-widest">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="outline-none border-[2px] border-lightOne p-4 rounded-lg font-poppins text-2xl"
                    {...register('password', { required: true })}
                  />
                  {errors.password && (
                    <span className="font-poppins p-2 text-sm text-red-600 font-light">
                      Password Field is required
                    </span>
                  )}
                </div>
                {/* occupation */}
                <div className="form-control my-8">
                  <label className="label">
                    <span className="font-lora text-2xl uppercase font-semibold tracking-widest">
                      Occupation
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="type your occupation"
                    className="outline-none border-[2px] border-lightOne p-4 rounded-lg font-poppins text-2xl"
                    {...register('occupation', { required: true })}
                  />
                  {errors.occupation && (
                    <span className="font-poppins p-2 text-sm text-red-600 font-light">
                      Occupation Field is required
                    </span>
                  )}
                </div>
                <div className="form-control mt-6">
                  <button className="bg-darkOne text-lightThree px-8 py-2 text-2xl font-lora rounded-lg hover:bg-transparent hover:text-darkOne border-2 border-darkOne">
                    Sign Up
                  </button>
                </div>
              </form>
    
              {/* Login route */}
              <div className="text-center text-2xl pt-4 pb-12">
                <p className="font-lora text-darkOne capitalize">
                  Already have a account
                  <Link to="/login">
                    <span className="font-semibold uppercase">Login</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    };
export default Register;