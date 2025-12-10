
/*
  Simple parametric animator for the face.
  The face is built from grouped shapes whose transforms we update.
  This approach keeps everything vector and animatable using transform/opacity.
*/

const face = {
  leftEyeG: document.getElementById('leftEyeG'),
  rightEyeG: document.getElementById('rightEyeG'),
  leftEye: document.getElementById('leftEye'),
  rightEye: document.getElementById('rightEye'),
  leftPupil: document.getElementById('leftPupil'),
  rightPupil: document.getElementById('rightPupil'),
  leftBrow: document.getElementById('leftBrow'),
  rightBrow: document.getElementById('rightBrow'),
  mouthG: document.getElementById('mouthG'),
  mouth: document.getElementById('mouth'),
  
};

// Each emotion maps to a set of transforms/properties.

const emotionKeywords = {
  happy: [
    "happy","joy","smile","smiling","excited","great","good","wonderful","cheerful",
    "delighted","content","glad","pleased","fantastic","positive","fun","awesome","love","amazing"
  ],
  sad: [
    "sad","cry","cried","crying","unhappy","depressed","upset","down","heartbroken",
    "tear","teary","lonely","miserable","unfortunate","melancholy","disappointed",
    "gloomy","blue","sorrow","grief","hurt","devastated","hopeless","broken",
    "tragic","dejected","forlorn","wounded","in pain"
  ],
  angry: [
    "angry","mad","furious","irritated","annoyed","rage","hate","upset","frustrated",
    "enraged","offended","disgusted","agitated","hostile","annoying","snapped","temper"
  ],
  surprised: [
    "surprised","shock","shocked","wow","amazed","astonished","startled","unexpected",
    "whoa","incredible","unbelievable","stunned","flabbergasted","speechless"
  ],
  sleepy: [
    "sleep","sleepy","tired","yawn","drowsy","exhausted","lazy","fatigued","dozing",
    "rest","nap","sluggish","weary"
  ]
};

const EMOTIONS = {
  neutral: {
    pupilOffset: [0,0],
    eyeScaleY: 1,
    browRotate: [0, 0],
    mouthTransform: { translateY: 0, scaleY: 1, scaleX: 1, rotate: 0 },
    mouthPath: "M70 135 q30 30 60 0",
    eyeOpacity: 1,
    
  },
happy: {
  pupilOffset: [0, -2],
  eyeScaleY: 0.9,
  browRotate: [-4, 4],
  mouthTransform: { translateY: 6, scaleY: 1.3, scaleX: 1.1, rotate: 0 },
  mouthPath: "M70 132 q30 25 60 0",
  eyeOpacity: 1,
  
},
    sad: {
        pupilOffset: [0, 2],
        eyeScaleY: 1.1,
        browRotate: [2, -2],
        mouthTransform: { translateY: 12, scaleY: .7, scaleX: 1.1, rotate: 0 },
        mouthPath: "M70 145 q30 -20 60 0",
        eyeOpacity: 1,
        
    },
    angry: {
    pupilOffset: [0,0],
    eyeScaleY: 1,
    browRotate: [12, -12],
    mouthTransform: { translateY: 10, scaleY: .8, scaleX: 1, rotate: 0 },
    mouthPath: "M70 140 q30 -15 60 0",
    eyeOpacity: 1,
   
    eyeOffsetX: 14,
  },
    surprised: {
        pupilOffset: [0,0],
        eyeScaleY: 1,
        browRotate: [-4, 4],
        mouthTransform: { translateY: 8, scaleY: 1.5, scaleX: 1.2, rotate: 0 },
        mouthPath: "M85 130 q15 20 30 0 q-15 -20 -30 0",
        eyeOpacity: 1,
        
    },
    sleepy: {
        pupilOffset: [0,4],
        eyeScaleY: 0.4,
        browRotate: [0, 0],
        mouthTransform: { translateY: 4, scaleY: 0.8, scaleX: 1, rotate: 0 },
        mouthPath: "M70 135 q30 5 60 0",
        eyeOpacity: 0.5,
    }
};
face.leftBrow.style.transformOrigin = "center";
face.rightBrow.style.transformOrigin = "center";
face.leftEyeG.style.transformOrigin = "center";
face.rightEyeG.style.transformOrigin = "center";
face.mouthG.style.transformOrigin = "center";

// apply emotion state
function applyEmotion(e) {
  const cfg = EMOTIONS[e];
  if (!cfg) return;

  // eyes scaling
  face.leftEyeG.style.transform = `translate(-18px, 0) scaleY(${cfg.eyeScaleY})`;
  face.rightEyeG.style.transform = `translate(18px, 0) scaleY(${cfg.eyeScaleY})`;

  // pupils offset
  face.leftPupil.style.transform = `translate(${cfg.pupilOffset[0]}px, ${cfg.pupilOffset[1]}px)`;
  face.rightPupil.style.transform = `translate(${cfg.pupilOffset[0]}px, ${cfg.pupilOffset[1]}px)`;

  // brows
  // brows (add X translation for gap)
face.leftBrow.style.transform = `translateX(-4px) rotate(${cfg.browRotate[0]}deg) translateY(-2px)`;
face.rightBrow.style.transform = `translateX(4px) rotate(${cfg.browRotate[1]}deg) translateY(-2px)`;


  // mouth transform
  const mt = cfg.mouthTransform;
  face.mouthG.style.transform = `translate(0, ${mt.translateY}px) rotate(${mt.rotate}deg) scale(${mt.scaleX}, ${mt.scaleY})`;

  // mouth shape
  if (cfg.mouthPath) face.mouth.setAttribute('d', cfg.mouthPath);

  
}

// Initialize
applyEmotion('neutral');

// Button controls
function setEmotion(name) {
  if (!EMOTIONS[name]) return console.warn('Unknown emotion', name);
  applyEmotion(name);
}
  
// Simple text-based emotion detection
function detectEmotionFromText(text) {
  text = text.toLowerCase();

  for (const [emotion, keywords] of Object.entries(emotionKeywords)) {
    if (keywords.some(word => text.includes(word))) {
      return emotion;
    }
  }

  return 'neutral'; // fallback if no keywords matched
}

      


// Read input and set emotion
function readEmotion() {
  const input = document.getElementById("emotionInput").value;
  const detectedEmotion = detectEmotionFromText(input);
  setEmotion(detectedEmotion);
}

// Bind Enter key
document.getElementById("emotionInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    readEmotion();
  }
});


