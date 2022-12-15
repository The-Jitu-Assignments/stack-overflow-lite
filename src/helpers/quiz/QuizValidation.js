import * as yup from 'yup';

export const quizValidation = data => {
  let schema = yup.object().shape({
    question: yup.string().required('You cannot post an empty question'),
  })
  return schema.validate(data);
};