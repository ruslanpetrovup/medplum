import { QuestionnaireForm, Document } from '@medplum/react';

const Questionnaire = () => {
  const test = (ev: any) => {
    console.dir(ev)
  }
  return (
    <Document>
      <QuestionnaireForm
        onSubmit={(formData) => {
          test(formData)
          // console.log('submit', formData);
        }}
        questionnaire={{
          resourceType: 'Questionnaire',
          id: 'multiple-choice',
          title: 'How the Test is Performed',
          item: [
            {
              linkId: 'q1',
              text: 'Breathing effort:',
              type: 'choice',
              answerOption: [
                {
                  valueString: 'If the infant is not breathing, the respiratory score is 0.',
                },
                {
                  valueString: 'If the respirations are slow or irregular, the infant scores 1 for respiratory effort.',
                },
                {
                  valueString: 'If the infant cries well, the respiratory score is 2.',
                },
              ],
            },
            {
              linkId: 'q2',
              text: 'Heart rate is evaluated by stethoscope. This is the most important assessment:',
              type: 'choice',
              answerOption: [
                {
                  valueString: 'If there is no heartbeat, the infant scores 0 for heart rate.',
                },
                {
                  valueString: 'If heart rate is less than 100 beats per minute, the infant scores 1 for heart rate.',
                },
                {
                  valueString: 'If heart rate is greater than 100 beats per minute, the infant scores 2 for heart rate.',
                },
              ],
            },
            {
              linkId: 'q3',
              text: 'Muscle tone:',
              type: 'choice',
              answerOption: [
                {
                  valueString: 'If muscles are loose and floppy, the infant scores 0 for muscle tone.',
                },
                {
                  valueString: 'If there is some muscle tone, the infant scores 1.',
                },
                {
                  valueString: 'If there is active motion, the infant scores 2 for muscle tone.',
                },
              ],
            },
            {
              linkId: 'q4',
              text: 'Grimace response or reflex irritability is a term describing response to stimulation, such as a mild pinch:',
              type: 'choice',
              answerOption: [
                {
                  valueString: 'If there is no reaction, the infant scores 0 for reflex irritability.',
                },
                {
                  valueString: 'If there is grimacing, the infant scores 1 for reflex irritability.',
                },
                {
                  valueString:
                    'If there is grimacing and a cough, sneeze, or vigorous cry, the infant scores 2 for reflex irritability.',
                },
              ],
            },
            {
              linkId: 'q5',
              text: 'Skin color:',
              type: 'choice',
              answerOption: [
                {
                  valueString: 'If the skin color is pale blue, the infant scores 0 for color.',
                },
                {
                  valueString: 'If the body is pink and the extremities are blue, the infant scores 1 for color.',
                },
                {
                  valueString: 'If the entire body is pink, the infant scores 2 for color.',
                },
              ],
            },
          ],
        }}
      />
    </Document>
  );
};
export default Questionnaire;
