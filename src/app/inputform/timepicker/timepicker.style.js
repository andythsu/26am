import '@polymer/polymer/lib/elements/dom-module.js';

const styleElement = document.createElement('dom-module');
styleElement.setAttribute('theme-for', 'vaadin-time-picker-text-field');

styleElement.innerHTML = 
 `<template>
   <style>
     :host([theme="custom-timepicker"]) [part="input-field"] {
        background-color: unset;
     }
   </style>
 </template>`;

styleElement.register('custom-timepicker'); 
