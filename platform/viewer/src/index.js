/**
 * Entry point for development and production PWA builds.
 * Packaged (NPM) builds go through `index-umd.js`
 */

import 'regenerator-runtime/runtime';

import App from './App.js';
import React from 'react';
import ReactDOM from 'react-dom';
// test

/**
 * EXTENSIONS
 * =================
 *
 * Importing and modifying the extensions our app uses HERE allows us to leverage
 * tree shaking and a few other niceties. However, by including them here they become
 * "baked in" to the published application.
 *
 * Depending on your use case/needs, you may want to consider not adding any extensions
 * by default HERE, and instead provide them via the extensions configuration key or
 * by using the exported `App` component, and passing in your extensions as props using
 * the defaultExtensions property.
 */
import OHIFVTKExtension from '@ohif/extension-vtk';
import OHIFDicomHtmlExtension from '@ohif/extension-dicom-html';
import OHIFDicomSegmentationExtension from '@ohif/extension-dicom-segmentation';
import OHIFDicomRtExtension from '@ohif/extension-dicom-rt';
import OHIFDicomMicroscopyExtension from '@ohif/extension-dicom-microscopy';
import OHIFDicomPDFExtension from '@ohif/extension-dicom-pdf';
//import OHIFDicomTagBrowserExtension from '@ohif/extension-dicom-tag-browser';
// Add this for Debugging purposes:
//import OHIFDebuggingExtension from '@ohif/extension-debugging';
import { version } from '../package.json';

/*
 * Default Settings
 */
let config = {};
// console.log('HERE')
// console.log(process.env.APP_CONFIG)
// const backendURL = process.env.REACT_APP_BACKEND_URL
// let datasetID = process.env.REACT_APP_DATASET_ID //.toString()
// const username = process.env.REACT_APP_BACKEND_USERNAME
// let password = process.env.REACT_APP_BACKEND_PASSWORD //.toString()

// if (typeof datasetID !== string) {
//   datasetID = datasetID.toString()
// }
// if (typeof password !== string) {
//   password = password.toString()
// }

// console.log('BACKEND URL', backendURL)
// console.log('DS ID', datasetID)
// console.log('username', username)
// console.log('password', password)
// console.log(backendURL)

// config = {
//   routerBasename: '/',
//   filterQueryParam: true,
//   extensions: [OHIFDicomSegmentationExtension],
//   servers: {
//     dicomWeb: [
//       {
//         name: 'DCM4CHEE',
//         // wadoUriRoot: 'http://localhost:5000/pacs-wado/0/admin/123456',
//         // qidoRoot: 'http://localhost:5000/pacs-qido/0/admin/123456',
//         // wadoRoot: 'http://localhost:5000/pacs-qido/0/admin/123456',
//         // wadoUriRoot: process.env.APP_CONFIG.replace('pacs-qido', 'pacs-wado'),
//         // qidoRoot: process.env.APP_CONFIG,
//         // wadoRoot: process.env.APP_CONFIG,
//         // wadoUriRoot: backendURL + datasetID + '/' + username + '/' + password,// 'http://localhost:8080/dcm4chee-arc/aets/DCM4CHEE/wado',
//         // qidoRoot: backendURL + datasetID + '/' + username + '/' + password,// 'http://localhost:8080/dcm4chee-arc/aets/DCM4CHEE/rs',
//         // wadoRoot: backendURL + datasetID + '/' + username + '/' + password, // 'http://localhost:8080/dcm4chee-arc/aets/DCM4CHEE/rs',
//         // wadoUriRoot: 'http://pacs-arc-1:8080/dcm4chee-arc/aets/DCM4CHEE/wado',
//         // qidoRoot: 'http://pacs-arc-1:8080/dcm4chee-arc/aets/DCM4CHEE/rs',
//         // wadoRoot: 'http://pacs-arc-1:8080/dcm4chee-arc/aets/DCM4CHEE/rs',
//         wadoUriRoot: 'http://localhost:8080/dcm4chee-arc/aets/DCM4CHEE/wado',
//         qidoRoot: 'http://localhost:8080/dcm4chee-arc/aets/DCM4CHEE/rs',
//         wadoRoot: 'http://localhost:8080/dcm4chee-arc/aets/DCM4CHEE/rs',
//         qidoSupportsIncludeField: false,
//         imageRendering: 'wadors',
//         thumbnailRendering: 'wadors',
//         enableStudyLazyLoad: true,
//         supportsFuzzyMatching: true,
//       }
//     ]
//   }
// }

// config = {
//   routerBasename: '/',
//   filterQueryParam: true,
//   //      extensions: [OHIFExtDicomMicroscopy],
//   servers: {
//     dicomWeb: [
//       {
//         name: 'DCM4CHEE',
//         wadoUriRoot: 'http://129.206.147.55:8080/dcm4chee-arc/aets/DCM4CHEE/wado',
//         qidoRoot: 'http://129.206.147.55:8080/dcm4chee-arc/aets/DCM4CHEE/rs',
//         wadoRoot: 'http://129.206.147.55:8080/dcm4chee-arc/aets/DCM4CHEE/rs',
//         qidoSupportsIncludeField: false,
//         imageRendering: 'wadors',
//         thumbnailRendering: 'wadors',
//         enableStudyLazyLoad: true,
//         supportsFuzzyMatching: true
//       }
//     ]
//   }
// }

if (window) {
  config = window.config || {};
  window.version = version;
}

const appProps = {
  config,
  defaultExtensions: [
    OHIFVTKExtension,
    OHIFDicomHtmlExtension,
    OHIFDicomMicroscopyExtension,
    OHIFDicomPDFExtension,
    OHIFDicomSegmentationExtension,
    OHIFDicomRtExtension,
    //OHIFDebuggingExtension,
    //OHIFDicomTagBrowserExtension,
  ],
};

/** Create App */
const app = React.createElement(App, appProps, null);

/** Render */
ReactDOM.render(app, document.getElementById('root'));
