'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote, MapPin, Users, Clock } from 'lucide-react'
import Section from '../../ui/Section'
import Card from '../../ui/Card'

export default function ProblemExampleSection() {
  return (
    <Section background="light" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-50"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="text-4xl">🍰</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              הבעיה של מוסדות כשרים בלתי נראים
            </h2>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-red-400 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-red-200" />
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  למרות הצמיחה של הקהילה היהודית והשוק הכשר בברזיל, מוסדות רבים נשארים כמעט בלתי נראים. <strong>דוגמה אמיתית:</strong> לחברה שלי יש מאפייה כשרה 100%, עם מוצרים מדהימים ופיקוח אמין. אבל נחשו מה? <em>כמעט אף אחד בקהילה לא יודע על זה.</em>
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  בלי פלטפורמה מרכזית, הגילוי של מקומות כאלה עדיין תלוי בשמועות בבתי כנסת, קבוצות סגורות או המלצות אישיות. מי שרוצה לארגן בר מצווה, למשל, צריך לרוץ אחרי המלצות, לבזבז זמן ואנרגיה בניסיון למצוא ספקים אמינים — בעוד שכמה כבר קיימים ומוכנים לשרת.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  חוסר הנראות הזה לא רק פוגע ביזמים, אלא גם מגביל את הקהילה הכשרה, שמאבדת גישה לאפשרויות מוצרים ושירותים מעולים. <strong className="text-red-600">זה בדיוק מה ש-BeKosher רוצה לפתור.</strong>
                </p>
              </div>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="text-center bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                <MapPin className="w-8 h-8 text-red-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">מוסדות נסתרים</h3>
                <p className="text-sm text-gray-600">מאפיות, בופטים ומסעדות כשרות קיימות אבל נשארות בלתי נראות לקהילה</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <Users className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">תלות בשמועות</h3>
                <p className="text-sm text-gray-600">גילויים קורים רק במקרה או המלצות אישיות בבתי כנסת</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="text-center bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">זמן ואנרגיה אבודים</h3>
                <p className="text-sm text-gray-600">ארגון אירועים כמו בר/בת מצווה הופך לחיפוש אוצר מיותר</p>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                💡 הפתרון פשוט
              </h3>
              <p className="text-lg text-primary-100">
                פלטפורמה שמחברת מוסדות כשרים לקהילה,<br />
                <strong className="text-gold-300">מבטלת את האי-נראות ומקלה על החיים של כולם.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
} 