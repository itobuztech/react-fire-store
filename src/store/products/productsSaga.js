import { takeLatest, call, put, all, fork } from 'redux-saga/effects';

import { productAction } from './prodctsAction';
import { product } from '../../services/products-api';