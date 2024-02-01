const questions = [
 {
  id: 1,
  question: 'Who is the last prophet in Islam?',
  options: ['Prophet Muhammad (PBUH)', 'Prophet Moses (Musa)', 'Prophet Jesus (Isa)', 'Prophet Adam'],
  correctAnswer: 'Prophet Muhammad (PBUH)',
  userAnswer: ""
 },
 {
  id: 2,
  question: 'What is the holy book of Islam?',
  options: ['Torah', 'Bible', 'Quran', 'Injil'],
  correctAnswer: 'Quran', userAnswer: ""
 },
 {
  id: 3,
  question: 'During which month is fasting (Sawm) observed by Muslims?',
  options: ['Shaban', 'Ramadan', 'Dhul-Hijjah', 'Muharram'],
  correctAnswer: 'Ramadan', userAnswer: ""
 },
 {
  id: 4,
  question: 'What is the pilgrimage to Mecca called in Islam?',
  options: ['Hajj', 'Umrah', 'Ziyarat', 'Tawaf'],
  correctAnswer: 'Hajj', userAnswer: ""
 },
 {
  id: 5,
  question: 'How many times a day do Muslims perform the Salah (prayer)?',
  options: ['Two', 'Three', 'Four', 'Five'],
  correctAnswer: 'Five', userAnswer: ""
 },
 {
  id: 6,
  question: 'What is the name of the angel who delivered revelations to Prophet Muhammad (PBUH)?',
  options: ['Jibril (Gabriel)', 'Mikail', 'Israfil', 'Azrael'],
  correctAnswer: 'Jibril (Gabriel)',
  userAnswer: ""
 },
 {
  id: 7,
  question: 'In which city was Prophet Muhammad (PBUH) born?',
  options: ['Medina', 'Jerusalem', 'Mecca', 'Cairo'],
  correctAnswer: 'Mecca',
  userAnswer: ""
 },
 {
  id: 8,
  question: 'What is the first month in the Islamic calendar?',
  options: ['Dhul-Hijjah', 'Rabi\' al-Thani', 'Muharram', 'Rabi\' al-Awwal'],
  correctAnswer: 'Muharram',
  userAnswer: ""
 },
 {
  id: 9,
  question: 'What is the significance of Laylat al-Qadr?',
  options: ['Eid al-Fitr', 'Night of Power', 'Hajj', 'Isra and Mi\'raj'],
  correctAnswer: 'Night of Power',
  userAnswer: ""
 },
 {
  id: 10,
  question: 'Which companion of Prophet Muhammad (PBUH) compiled the Quran into a single book?',
  options: ['Umar ibn al-Khattab', 'Ali ibn Abi Talib', 'Abu Bakr as-Siddiq', 'Uthman ibn Affan'],
  correctAnswer: 'Uthman ibn Affan',
  userAnswer: ""
 }, {
  id: 11,
  question: 'What is the significance of the Hijra in Islamic history?',
  options: ['Birth of Prophet Muhammad', 'First Revelation', 'Migration to Medina', 'Battle of Badr'],
  correctAnswer: 'Migration to Medina',
  userAnswer: ""
 },
 {
  id: 12,
  question: 'Who was the first Caliph after Prophet Muhammad (PBUH)?',
  options: ['Umar ibn al-Khattab', 'Ali ibn Abi Talib', 'Abu Bakr as-Siddiq', 'Uthman ibn Affan'],
  correctAnswer: 'Abu Bakr as-Siddiq',
  userAnswer: ""
 },
 {
  id: 13,
  question: 'Which Islamic month is known as the "Month of Forgiveness"?',
  options: ['Ramadan', 'Shawwal', 'Dhul-Hijjah', 'Muharram'],
  correctAnswer: 'Ramadan',
  userAnswer: ""
 },
 {
  id: 14,
  question: 'What is the term for Islamic jurisprudence or the understanding of Islamic law?',
  options: ['Hadith', 'Fiqh', 'Tafsir', 'Ijtihad'],
  correctAnswer: 'Fiqh',
  userAnswer: ""
 },
 {
  id: 15,
  question: 'In Islam, what is the term for charitable giving?',
  options: ['Zakat', 'Sadaqah', 'Fitrah', 'Khums'],
  correctAnswer: 'Sadaqah',
  userAnswer: ""
 },
 {
  id: 16,
  question: 'What is the name of the gate of the Kaaba?',
  options: ['Bab al-Rahmah', 'Bab al-Salam', 'Bab al-Fath', 'Bab al-Umrah'],
  correctAnswer: 'Bab al-Salam',
  userAnswer: ""
 },
 {
  id: 17,
  question: 'Which Prophet is known as the "Father of Prophets"?',
  options: ['Prophet Ibrahim (Abraham)', 'Prophet Musa (Moses)', 'Prophet Isa (Jesus)', 'Prophet Muhammad (PBUH)'],
  correctAnswer: 'Prophet Ibrahim (Abraham)',
  userAnswer: ""
 },
 {
  id: 18,
  question: 'What is the name of the angel who will blow the trumpet signaling the Day of Judgment?',
  options: ['Jibril (Gabriel)', 'Mikail', 'Israfil', 'Azrael'],
  correctAnswer: 'Israfil',
  userAnswer: ""
 },
 {
  id: 19,
  question: 'Which Surah is known as the "Heart of the Quran"?',
  options: ['Surah Al-Fatiha', 'Surah Al-Baqarah', 'Surah Yasin', 'Surah Ar-Rahman'],
  correctAnswer: 'Surah Yasin',
  userAnswer: ""
 },
 {
  id: 20,
  question: 'What is the term for the Night Journey of Prophet Muhammad (PBUH) to the heavens?',
  options: ['Isra', 'Mi\'raj', 'Lailat al-Qadr', 'Tahajjud'],
  correctAnswer: 'Mi\'raj',
  userAnswer: ""
 }, {
  id: 21,
  question: 'What is the term for the Islamic declaration of faith?',
  options: ['Salat', 'Hajj', 'Shahada', 'Zakat'],
  correctAnswer: 'Shahada',
  userAnswer: ""
 },
 {
  id: 22,
  question: 'Which Prophet is known as the "Friend of Allah"?',
  options: ['Prophet Ibrahim (Abraham)', 'Prophet Musa (Moses)', 'Prophet Isa (Jesus)', 'Prophet Muhammad (PBUH)'],
  correctAnswer: 'Prophet Ibrahim (Abraham)',
  userAnswer: ""
 },
 {
  id: 23,
  question: 'What is the term for the Night of Ascension of Prophet Muhammad (PBUH) to the heavens?',
  options: ['Isra', 'Mi\'raj', 'Lailat al-Qadr', 'Tahajjud'],
  correctAnswer: 'Mi\'raj',
  userAnswer: ""
 },
 {
  id: 24,
  question: 'Who was the foster brother of Prophet Muhammad (PBUH)?',
  options: ['Ali ibn Abi Talib', 'Hamza ibn Abdul-Muttalib', 'Abu Bakr as-Siddiq', 'Zaid ibn Harithah'],
  correctAnswer: 'Zaid ibn Harithah',
  userAnswer: ""
 },
 {
  id: 25,
  question: 'In which year did the Battle of Badr take place?',
  options: ['1 AH', '2 AH', '3 AH', '4 AH'],
  correctAnswer: '2 AH',
  userAnswer: ""
 },
 {
  id: 26,
  question: 'What is the name of the well mentioned in the story of Prophet Yusuf (Joseph)?',
  options: ['Zamzam', 'Salsabeel', 'Al-Kawthar', 'Ayn al-Hayat'],
  correctAnswer: 'Ayn al-Hayat',
  userAnswer: ""
 },
 {
  id: 27,
  question: 'What is the term for the voluntary night prayer performed during the last ten nights of Ramadan?',
  options: ['Tahajjud', 'Ishraq', 'Duha', 'Witr'],
  correctAnswer: 'Tahajjud',
  userAnswer: ""
 },
 {
  id: 28,
  question: 'Which Surah is known as the "Verse of the Throne"?',
  options: ['Surah Al-Fatiha', 'Surah Al-Baqarah', 'Surah Ayat al-Kursi', 'Surah Al-Mulk'],
  correctAnswer: 'Surah Ayat al-Kursi',
  userAnswer: ""
 },
 {
  id: 29,
  question: 'What is the term for the pilgrimage to Mecca that can be undertaken at any time of the year?',
  options: ['Hajj', 'Umrah', 'Ziyarat', 'Tawaf'],
  correctAnswer: 'Umrah',
  userAnswer: ""
 },
 {
  id: 30,
  question: 'In Islam, what is the term for seeking forgiveness from Allah?',
  options: ['Istikhara', 'Tawbah', 'Dua', 'Ruqyah'],
  correctAnswer: 'Tawbah',
  userAnswer: ""
 },
 {
  id: 31,
  question: 'What is the term for the pre-dawn meal before the fast begins during Ramadan?',
  options: ['Iftar', 'Suhoor', 'Tarawih', 'Qiyam'],
  correctAnswer: 'Suhoor',
  userAnswer: ""
 },
 {
  id: 32,
  question: 'Which Prophet is known as the "Carpenter Prophet"?',
  options: ['Prophet Ibrahim (Abraham)', 'Prophet Isa (Jesus)', 'Prophet Nuh (Noah)', 'Prophet Yusuf (Joseph)'],
  correctAnswer: 'Prophet Nuh (Noah)',
  userAnswer: ""
 },
 {
  id: 33,
  question: 'What is the term for the annual Islamic pilgrimage to Mecca?',
  options: ['Hajj', 'Umrah', 'Ziyarat', 'Tawaf'],
  correctAnswer: 'Hajj',
  userAnswer: ""
 },
 {
  id: 34,
  question: 'Who was the first woman to accept Islam?',
  options: ['Khadijah bint Khuwaylid', 'Aisha bint Abi Bakr', 'Fatimah bint Muhammad', 'Zainab bint Jahsh'],
  correctAnswer: 'Khadijah bint Khuwaylid',
  userAnswer: ""
 },
 {
  id: 35,
  question: 'What is the term for the Islamic month of fasting?',
  options: ['Shawwal', 'Ramadan', 'Dhul-Qi\'dah', 'Rabi\' al-Awwal'],
  correctAnswer: 'Ramadan',
  userAnswer: ""
 },
 {
  id: 36,
  question: 'What is the name of the angel who will take the soul of every living being?',
  options: ['Jibril (Gabriel)', 'Mikail', 'Israfil', 'Azrael'],
  correctAnswer: 'Azrael',
  userAnswer: ""
 },
 {
  id: 37,
  question: 'Who is known as the "Mother of the Believers"?',
  options: ['Khadijah bint Khuwaylid', 'Aisha bint Abi Bakr', 'Fatimah bint Muhammad', 'Zainab bint Jahsh'],
  correctAnswer: 'Aisha bint Abi Bakr',
  userAnswer: ""
 },
 {
  id: 38,
  question: 'What is the term for the proclamation of the greatness of Allah during the pilgrimage?',
  options: ['Takbir', 'Tahlil', 'Tasbeeh', 'Tawaf'],
  correctAnswer: 'Takbir',
  userAnswer: ""
 },
 {
  id: 39,
  question: 'In which Surah is the story of the People of the Cave (Ashab al-Kahf) mentioned?',
  options: ['Surah Al-Fatiha', 'Surah Al-Baqarah', 'Surah Al-Kahf', 'Surah Yasin'],
  correctAnswer: 'Surah Al-Kahf',
  userAnswer: ""
 },
 {
  id: 40,
  question: 'What is the term for the obligatory charity given by Muslims?',
  options: ['Zakat', 'Sadaqah', 'Fitrah', 'Khums'],
  correctAnswer: 'Zakat',
  userAnswer: ""
 },
 {
  id: 41,
  question: 'In which Islamic month was the Quran first revealed?',
  options: ['Shaban', 'Ramadan', 'Dhul-Hijjah', 'Muharram'],
  correctAnswer: 'Ramadan',
  userAnswer: ""
 },
 {
  id: 42,
  question: 'Who was the first woman to lead an army in battle in Islamic history?',
  options: ['Khadijah bint Khuwaylid', 'Fatimah bint Muhammad', 'Aisha bint Abi Bakr', 'Umm Salamah'],
  correctAnswer: 'Aisha bint Abi Bakr',
  userAnswer: ""
 },
 {
  id: 43,
  question: 'What is the term for the Friday congregational prayer in Islam?',
  options: ['Fajr', 'Dhuhr', 'Asr', 'Jumu\'ah'],
  correctAnswer: 'Jumu\'ah',
  userAnswer: ""
 },
 {
  id: 44,
  question: 'Which Prophet is known as the "Father of the Arabs"?',
  options: ['Prophet Ibrahim (Abraham)', 'Prophet Isma\'il (Ishmael)', 'Prophet Yusuf (Joseph)', 'Prophet Nuh (Noah)'],
  correctAnswer: 'Prophet Isma\'il (Ishmael)',
  userAnswer: ""
 },
 {
  id: 45,
  question: 'What is the term for the Islamic legal opinion issued by a qualified jurist?',
  options: ['Fatwa', 'Hadith', 'Ijma', 'Qiyas'],
  correctAnswer: 'Fatwa',
  userAnswer: ""
 },
 {
  id: 46,
  question: 'Who is known as the "Lion of Allah"?',
  options: ['Ali ibn Abi Talib', 'Hamza ibn Abdul-Muttalib', 'Khalid ibn al-Walid', 'Umar ibn al-Khattab'],
  correctAnswer: 'Ali ibn Abi Talib',
  userAnswer: ""
 },
 {
  id: 47,
  question: 'What is the term for the ritual washing before prayer in Islam?',
  options: ['Wudhu', 'Ghusl', 'Tayammum', 'Masah'],
  correctAnswer: 'Wudhu',
  userAnswer: ""
 },
 {
  id: 48,
  question: 'Who is known as the "Second Caliph"?',
  options: ['Umar ibn al-Khattab', 'Ali ibn Abi Talib', 'Abu Bakr as-Siddiq', 'Uthman ibn Affan'],
  correctAnswer: 'Umar ibn al-Khattab',
  userAnswer: ""
 },
 {
  id: 49,
  question: 'What is the term for the pilgrimage to Mecca performed outside the designated Hajj months?',
  options: ['Hajj', 'Umrah', 'Ziyarat', 'Tawaf'],
  correctAnswer: 'Umrah',
  userAnswer: ""
 },
 {
  id: 50,
  question: 'Who was the first martyr in Islam?',
  options: ['Umar ibn al-Khattab', 'Ali ibn Abi Talib', 'Hamza ibn Abdul-Muttalib', 'Sumayyah bint Khabbab'],
  correctAnswer: 'Sumayyah bint Khabbab',
  userAnswer: ""
 },
 {
  id: 51,
  question: 'Which battle is known as the "Battle of Badr" in Islamic history?',
  options: ['Battle of Uhud', 'Battle of Khandaq', 'Battle of Tabuk', 'Battle of Badr'],
  correctAnswer: 'Battle of Badr',
  userAnswer: ""
 },
 {
  id: 52,
  question: 'What is the term for the Islamic declaration of faith?',
  options: ['Shahada', 'Salah', 'Zakat', 'Sawm'],
  correctAnswer: 'Shahada',
  userAnswer: ""
 },
 {
  id: 53,
  question: 'Who is known as the "Father of the Prophets"?',
  options: ['Prophet Muhammad (PBUH)', 'Prophet Ibrahim (Abraham)', 'Prophet Isa (Jesus)', 'Prophet Musa (Moses)'],
  correctAnswer: 'Prophet Ibrahim (Abraham)',
  userAnswer: ""
 },
 {
  id: 54,
  question: 'What is the term for the night journey of Prophet Muhammad (PBUH) from Mecca to Jerusalem and then to the heavens?',
  options: ['Isra and Mi\'raj', 'Hijra', 'Tawaf', 'Istisqaa'],
  correctAnswer: 'Isra and Mi\'raj',
  userAnswer: ""
 },
 {
  id: 55,
  question: 'Who is known as the "Seal of the Prophets"?',
  options: ['Prophet Ibrahim (Abraham)', 'Prophet Isa (Jesus)', 'Prophet Musa (Moses)', 'Prophet Muhammad (PBUH)'],
  correctAnswer: 'Prophet Muhammad (PBUH)',
  userAnswer: ""
 },
 {
  id: 56,
  question: 'What is the term for the division of inheritance in Islamic law?',
  options: ['Ijma', 'Qiyas', 'Tafsir', 'Faraid'],
  correctAnswer: 'Faraid',
  userAnswer: ""
 },
 {
  id: 57,
  question: 'In which battle did Hamza ibn Abdul-Muttalib, the uncle of Prophet Muhammad (PBUH), become a martyr?',
  options: ['Battle of Uhud', 'Battle of Badr', 'Battle of Khandaq', 'Battle of Tabuk'],
  correctAnswer: 'Battle of Uhud',
  userAnswer: ""
 },
 {
  id: 58,
  question: 'What is the term for the annual almsgiving during Ramadan?',
  options: ['Zakat', 'Sadaqah', 'Fitrah', 'Khums'],
  correctAnswer: 'Fitrah',
  userAnswer: ""
 },
 {
  id: 59,
  question: 'Who is known as the "Prince of the Believers"?',
  options: ['Ali ibn Abi Talib', 'Umar ibn al-Khattab', 'Abu Bakr as-Siddiq', 'Uthman ibn Affan'],
  correctAnswer: 'Ali ibn Abi Talib',
  userAnswer: ""
 },
 {
  id: 60,
  question: 'What is the term for the Islamic call to prayer?',
  options: ['Iqama', 'Takbir', 'Tahlil', 'Adhan'],
  correctAnswer: 'Adhan',
  userAnswer: ""
 },
 {
  id: 61,
  question: 'In which Islamic month did the Battle of Badr take place?',
  options: ['Shawwal', 'Ramadan', 'Dhul-Hijjah', 'Rabi\' al-Awwal'],
  correctAnswer: 'Ramadan',
  userAnswer: ""
 },
 {
  id: 62,
  question: 'Who was the first Caliph after the death of Prophet Muhammad (PBUH)?',
  options: ['Umar ibn al-Khattab', 'Ali ibn Abi Talib', 'Abu Bakr as-Siddiq', 'Uthman ibn Affan'],
  correctAnswer: 'Abu Bakr as-Siddiq',
  userAnswer: ""
 },
 {
  id: 63,
  question: 'What is the term for the voluntary night prayer during Ramadan?',
  options: ['Tahajjud', 'Qiyam', 'Tarawih', 'Ishraq'],
  correctAnswer: 'Tarawih',
  userAnswer: ""
 },
 {
  id: 64,
  question: 'Who is known as the "Mother of the Poor"?',
  options: ['Khadijah bint Khuwaylid', 'Aisha bint Abi Bakr', 'Fatimah bint Muhammad', 'Umm Salamah'],
  correctAnswer: 'Fatimah bint Muhammad',
  userAnswer: ""
 },
 {
  id: 65,
  question: 'What is the term for the recitation of the Quran in a melodic and rhythmic manner?',
  options: ['Qira\'ah', 'Tafsir', 'Hadith', 'Ijma'],
  correctAnswer: 'Qira\'ah',
  userAnswer: ""
 },
 {
  id: 66,
  question: 'Who is known as the "Father of Maryam (Mary)"?',
  options: ['Prophet Ibrahim (Abraham)', 'Prophet Isa (Jesus)', 'Prophet Musa (Moses)', 'Prophet Imran'],
  correctAnswer: 'Prophet Imran',
  userAnswer: ""
 },
 {
  id: 67,
  question: 'What is the term for the pilgrimage to Mecca performed during the Hajj months?',
  options: ['Hajj', 'Umrah', 'Ziyarat', 'Tawaf'],
  correctAnswer: 'Hajj',
  userAnswer: ""
 },
 {
  id: 68,
  question: 'Who is known as the "Father of the Poor"?',
  options: ['Prophet Muhammad (PBUH)', 'Prophet Ibrahim (Abraham)', 'Prophet Isa (Jesus)', 'Prophet Musa (Moses)'],
  correctAnswer: 'Prophet Muhammad (PBUH)',
  userAnswer: ""
 },
 {
  id: 69,
  question: 'What is the term for the charitable act of feeding the poor?',
  options: ['Zakat', 'Sadaqah', 'Iftar', 'Fitrah'],
  correctAnswer: 'Iftar',
  userAnswer: ""
 },
 {
  id: 70,
  question: 'Who is known as the "Mercy to the Worlds"?',
  options: ['Prophet Ibrahim (Abraham)', 'Prophet Isa (Jesus)', 'Prophet Musa (Moses)', 'Prophet Muhammad (PBUH)'],
  correctAnswer: 'Prophet Muhammad (PBUH)',
  userAnswer: ""
 },
 {
  id: 71,
  question: 'In which city did the Prophet Muhammad (PBUH) receive the first revelation?',
  options: ['Mecca', 'Medina', 'Jerusalem', 'Cairo'],
  correctAnswer: 'Mecca',
  userAnswer: ""
 },
 {
  id: 72,
  question: 'What is the term for the Islamic declaration of faith?',
  options: ['Shahada', 'Salah', 'Zakat', 'Sawm'],
  correctAnswer: 'Shahada',
  userAnswer: ""
 },
 {
  id: 73,
  question: 'Who is known as the "Father of the Prophets"?',
  options: ['Prophet Muhammad (PBUH)', 'Prophet Ibrahim (Abraham)', 'Prophet Isa (Jesus)', 'Prophet Musa (Moses)'],
  correctAnswer: 'Prophet Ibrahim (Abraham)',
  userAnswer: ""
 },
 {
  id: 74,
  question: 'What is the term for the night journey of Prophet Muhammad (PBUH) from Mecca to Jerusalem and then to the heavens?',
  options: ['Isra and Mi\'raj', 'Hijra', 'Tawaf', 'Istisqaa'],
  correctAnswer: 'Isra and Mi\'raj',
  userAnswer: ""
 },
 {
  id: 75,
  question: 'Who is known as the "Seal of the Prophets"?',
  options: ['Prophet Ibrahim (Abraham)', 'Prophet Isa (Jesus)', 'Prophet Musa (Moses)', 'Prophet Muhammad (PBUH)'],
  correctAnswer: 'Prophet Muhammad (PBUH)',
  userAnswer: ""
 },
 {
  id: 76,
  question: 'What is the term for the division of inheritance in Islamic law?',
  options: ['Ijma', 'Qiyas', 'Tafsir', 'Faraid'],
  correctAnswer: 'Faraid',
  userAnswer: ""
 },
 {
  id: 77,
  question: 'In which battle did Hamza ibn Abdul-Muttalib, the uncle of Prophet Muhammad (PBUH), become a martyr?',
  options: ['Battle of Uhud', 'Battle of Badr', 'Battle of Khandaq', 'Battle of Tabuk'],
  correctAnswer: 'Battle of Uhud',
  userAnswer: ""
 },
 {
  id: 78,
  question: 'What is the term for the annual almsgiving during Ramadan?',
  options: ['Zakat', 'Sadaqah', 'Fitrah', 'Khums'],
  correctAnswer: 'Fitrah',
  userAnswer: ""
 },
 {
  id: 79,
  question: 'Who is known as the "Prince of the Believers"?',
  options: ['Ali ibn Abi Talib', 'Umar ibn al-Khattab', 'Abu Bakr as-Siddiq', 'Uthman ibn Affan'],
  correctAnswer: 'Ali ibn Abi Talib',
  userAnswer: ""
 },
 {
  id: 80,
  question: 'What is the term for the Islamic call to prayer?',
  options: ['Iqama', 'Takbir', 'Tahlil', 'Adhan'],
  correctAnswer: 'Adhan',
  userAnswer: ""
 },
];

// Shuffle function using Fisher-Yates algorithm
const shuffleArray = (array) => {
 for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[j], array[i]];
 }
 return array;
};

// Shuffle the questions array
const shuffledQuestions = shuffleArray([...questions]);

// Select the first 10 questions
const selectedQuestions = shuffledQuestions.slice(0, 10);

// Export the selected questions array
export default selectedQuestions;

// export default questions;
