import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
  test('should return an error if first name is missing', () => {
    const errors = formValidator('', 'Doe', 30);
    expect(errors).toContain('First name is required with at least 1 character');
  });

  test('should return an error if first name is too short', () => {
    const errors = formValidator('a', 'Doe', 30);
    expect(errors).toContain('First name is required with at least 1 character');
  });

  test('should return an error if last name is missing', () => {
    const errors = formValidator('John', '', 30);
    expect(errors).toContain('Last name is required with at least 1 character');
  });

  test('should return an error if last name is too short', () => {
    const errors = formValidator('J', '', 30);
    expect(errors).toContain('Last name is required with at least 1 character');
  });

  test('should return an error if age is negative', () => {
    const errors = formValidator('John', 'Doe', -1);
    expect(errors).toContain('Age must be a positive number');
  });

   test('should return an error if age is not number', () => {
    const errors = formValidator('John', 'Doe', 'HALO');
    expect(errors).toContain('Age must be a number');
  });

   test('should return an error if age is not number', () => {
    const errors = formValidator('John', 'Doe', null);
    expect(errors).toContain('Age must be a number');
  });
});
