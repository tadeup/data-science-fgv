import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';

import {firebaseConnect, firestoreConnect} from 'react-redux-firebase';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import {compose} from "redux";

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

// Path within Database for metadata (also used for file Storage path)
const filesPath = 'uploadedFiles';

function Uploader(props) {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: 'image/*',
    onDrop: files => {
      console.log(files);
      console.log(props);
      console.log(props.firebase.storage().ref(filesPath));
      props.firebase.uploadFiles(filesPath, files)
        .then((data) => {
          console.log(data)
        })
        .catch((e) => {
          console.log(e)
        });
    }
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject
  ]);

  return (
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Arraste aqui uma imagem ou clique para selecionar do disco</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}

Uploader.propTypes = {
  firebase: PropTypes.object.isRequired,
  uploadedFiles: PropTypes.object
};

const mapStateToProps = state => {
  return {
    uploadedFiles: state
  }
};

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firebaseConnect(),
)(Uploader);