import { Modal, Button, Row, Col } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const AddProductModal = ({ modalOpen, handleClose, submitForm, selectedProductData }) => {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{
          category: selectedProductData ? selectedProductData.category : '',
          description: selectedProductData ? selectedProductData.description : '',
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
          submitForm(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Modal show={modalOpen} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProductData ? 'Edit' : 'Add' } a product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Col className='form-group'>
                    <Field
                      type='title'
                      name='title'
                      placeholder='title'
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
                    <Field
                      type='text'
                      name='image'
                      placeholder='image url'
                      className='form-control'
                    />
                    <ErrorMessage
                      name='image'
                      component='div'
                      className='text-danger'
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className='form-group'>
                    <Field
                      type='category'
                      name='category'
                      placeholder='category'
                      className='form-control'
                    />
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
                      placeholder='description'
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
                      placeholder='price'
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
                    <Button type='submit' disabled={ isSubmitting }>
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Formik>
    </>
  );
};
