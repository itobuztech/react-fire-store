import React, { Component } from 'react';

import { Modal, Button, Row, Col } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Typeahead } from 'react-bootstrap-typeahead';
import { toast } from 'react-toastify';

import { storage } from '../../../services/firebase';

class AddProductModal extends Component {
  state = {
    category: null,
  };

  getUploadedImageUrl = (file) => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    return fileRef
      .put(file)
      .then(() => {
        return fileRef.getDownloadURL()
      })
      .catch((err) => toast.error(err.message));
  };

  render() {
    const {
      modalOpen,
      handleClose,
      submitForm,
      selectedProductData,
    } = this.props;

    return (
      <>
        <Formik
          enableReinitialize={true}
          initialValues={{
            category: '',
            description: selectedProductData
              ? selectedProductData.description
              : '',
            image: selectedProductData ? selectedProductData.image : '',
            price: selectedProductData ? selectedProductData.price : '',
            title: selectedProductData ? selectedProductData.title : '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.category) {
              errors.category = 'Category is required';
            }
            if (!values.description) {
              errors.description = 'Description is required';
            }
            if (!values.image) {
              errors.image = 'Image is required';
            }
            if (!values.price) {
              errors.price = 'Price is required';
            }
            if (!values.title) {
              errors.title = 'Title is required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const category = values.category.category
              ? values.category.category
              : values.category;
            this.getUploadedImageUrl(values.image).then((url) => {
              const payload = { ...values, category, image: url };
              submitForm(payload);
              setSubmitting(false);
            });
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Modal show={modalOpen} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {selectedProductData ? 'Edit' : 'Add'} a product
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Row>
                    <Col className='form-group'>
                      <Field
                        type='title'
                        name='title'
                        placeholder='Title'
                        className='form-control'
                      />
                      <ErrorMessage
                        name='title'
                        component='div'
                        className='text-danger'
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className='form-group'>
                      <Field name='image'>
                        {({ field }) => (
                          <input
                            accept='image/*'
                            name='image'
                            type='file'
                            onChange={(event) =>
                              setFieldValue(
                                'image',
                                event.currentTarget.files[0]
                              )
                            }
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name='image'
                        component='div'
                        className='text-danger'
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className='form-group'>
                      <Field name='category' component='select'>
                        {({ field }) => (
                          <Typeahead
                            className='add-product__category-select'
                            allowNew
                            clearButton
                            defaultSelected={
                              selectedProductData
                                ? [selectedProductData.category]
                                : ''
                            }
                            id='custom-selections-example'
                            labelKey='category'
                            onChange={(selectedProd) => {
                              setFieldValue('category', selectedProd[0]);
                            }}
                            newSelectionPrefix='Add a new item: '
                            options={['mobile', 'devices']}
                            placeholder='Category'
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name='category'
                        component='div'
                        className='text-danger'
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className='form-group'>
                      <Field
                        type='description'
                        name='description'
                        placeholder='Description'
                        className='form-control'
                      />
                      <ErrorMessage
                        name='description'
                        component='div'
                        className='text-danger'
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className='form-group'>
                      <Field
                        type='price'
                        name='price'
                        placeholder='Price'
                        className='form-control'
                      />
                      <ErrorMessage
                        name='price'
                        component='div'
                        className='text-danger'
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={{ span: 4, offset: 4 }} className='text-center'>
                      <Button type='submit' disabled={isSubmitting}>
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Modal.Body>
            </Modal>
          )}
        </Formik>
      </>
    );
  }
}

export default AddProductModal;
