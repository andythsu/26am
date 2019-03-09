import '@polymer/polymer/lib/elements/dom-module.js';

const styleElement = document.createElement('dom-module');
styleElement.setAttribute('theme-for', 'vaadin-text-field');

styleElement.innerHTML = 
 `<template>
   <style>
     :host([theme="custom-datepicker"]) [part="input-field"] {
        background-color: unset;
     }
   </style>
 </template>`;

styleElement.register('custom-datepicker'); 
