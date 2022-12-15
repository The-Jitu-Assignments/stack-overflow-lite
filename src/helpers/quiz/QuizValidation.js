import * as yup from 'yup';

export const quizValidation = question => {
  let schema = yup.object().shape({
    question: yup.string().required('You cannot post an empty question'),
  })
  return schema.validate(question);
};