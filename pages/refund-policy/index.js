import React from 'react';
import { Container } from '../../components/Terms&Conditions';



const index = ({ language }) => {
      return (
            <Container language={language}>
                  <h2>
                        {
                              language === "English"
                                    ? "- Return and Refund Terms:"
                                    : "شروط الاسترجاع والإسترداد:"
                        }
                  </h2>

                  <p>
                        {
                              language === "English"
                                    ? "The amounts paid - if any - for tourism services reservations are refunded after referring to the service providers first based on their terms and conditions, and the amount is refunded by Break Travel and Tours within two working days, after the bank supplies the value of the amount paid to us. In some cases, there are delays by the bank until the amount is transferred to Break Travel and Tours Company, and the refunded amount is refunded in the same way it was paid."
                                    : "يتم استرجاع المبالغ المدفوعة – إن وجدت - مقابل حجوزات الخدمات السياحية بعد الرجوع لمقدمي الخدمة أولاً إستناداً على الشروط و الأحكام الخاصة بهم، ويتم رد المبلغ من قبل شركة بريك للسفر والرحلات خلال يومين عمل، بعد توريد البنك قيمة المبلغ المدفوع لنا. في بعض الحالات تحدث تأخيرات من قبل البنك لحين تحويل المبلغ لشركة بريك للسفر والرحلات و يتم رد المبلغ المسترجع بنفس الطريقة التي تم دفعه بها."
                        }
                  </p>

                  <h3>
                        {
                              language === "English"
                                    ? "- Complaints and inquiries:"
                                    : "- الشكاوي و الإستفسارات:"
                        }
                  </h3>

                  <p>
                        {
                              language === "English"
                                    ? "In the event that you are not satisfied with any aspect, a service from the Break Travel website, or to register inquiries or suggestions, please contact the breaktrips2022@gmail.com account. To send any complaint or inquiry related to the customer service center, please contact the breaktrips2022@gmail.com account for direct inquiries. With a customer service representative, you can contact the numbers 01068641033, 01062281881."
                                    : "في حالة عدم رضاك عن أي جانب أ, خدمة من خدمات موقع بريك للسفر والرحلات أو لتسجيل الإستفسارات أو الإقتراحات يرجى التواصل على حساب breaktrips2022@gmail.com لإرسال أي شكوى أو استفسار يختص بمركز خدمة العملاء يرجى التواصل على الحساب breaktrips2022@gmail.com للإستفسار المباشر مع أحد ممثلي خدمة العملاء يمكنك التواصل على الأرقام 01068641033 ، 01062281881."
                        }
                  </p>



            </Container>
      )
}

export default index