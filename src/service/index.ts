import React from 'react'
import { Places } from '../types/Places.type';
import api from './api';

export async function getPlaces() {
    return api.get<Places>('/get-places');
  }
  