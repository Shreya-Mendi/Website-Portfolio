/* ============================================================
   SHREYA MENDI — PORTFOLIO  main.js
   ============================================================ */

// ── PROJECT DATA ──────────────────────────────────────────────
const PROJECTS = [
  {
    id: 'when2speak',
    title: 'When2Speak',
    subtitle: 'LLM Intervention Policy Agent',
    tech: ['NLP', 'Reinforcement Learning', 'PyTorch', 'Policy Gradient', 'A/B Testing'],
    tags: ['active', 'nlp'],
    date: 'Jan 2026 – Present',
    status: 'active',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80',
    brief: 'RL policy network cutting unnecessary LLM interventions by 25%. NeurIPS paper in progress at Duke Trust Lab.',
    bullets: [
      'Trained a lightweight RL policy network for multi-agent dialogue intervention using PyTorch and NLP; reduced unnecessary interventions by 25% while maintaining task success rate, validated on a 10,000-dialogue simulation suite via A/B testing.',
      'Applied role-prompting, prompt engineering, and policy gradient methods to optimize intervention timing in real-time conversational AI systems, improving agent decision quality across adversarial dialogue scenarios.',
      'Co-authoring a NeurIPS submission on safe agentic AI behavior under faculty supervision at Duke Trust Lab.',
    ],
    github: 'https://github.com/duke-trust-lab/when2speak',
    demo: null,
    featured: true,
    npo: false,
  },
  {
    id: 'uav-sar',
    title: 'UAV-SAR',
    subtitle: 'Aerial Human Detection — Search & Rescue',
    tech: ['Computer Vision', 'Faster R-CNN', 'PyTorch', 'Object Detection', 'Domain Adaptation'],
    tags: ['active', 'cv'],
    date: 'Jan 2026 – Present',
    status: 'active',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80',
    brief: '20% recall improvement on thermal SAR imagery under snow, smoke, and sensor noise — safety-critical CV pipeline.',
    bullets: [
      'Fine-tuned Faster R-CNN on thermal SAR imagery with domain-specific augmentations (snow, smoke, sensor noise); achieved 20% recall improvement under adverse conditions with <5% clean-data accuracy loss.',
      'Built an end-to-end CV pipeline in PyTorch with custom data loaders, augmentation strategies, and model evaluation metrics, enabling reproducible safety-critical deployment across harsh environmental conditions.',
    ],
    github: 'https://github.com/Shreya-Mendi',
    demo: null,
    featured: false,
    npo: false,
  },
  {
    id: 'bmw',
    title: 'BMW Capstone',
    subtitle: 'Industrial AI Inventory Decision System',
    tech: ['LightGBM', 'SHAP', 'Optuna', 'Flask', 'REST API', 'Scikit-learn'],
    tags: ['active', 'mlops'],
    date: 'Jan 2026 – Present',
    status: 'active',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    brief: 'SHAP-driven inventory recommendations for BMW dealers on 4,169 real orders — live REST API + dealer dashboard.',
    bullets: [
      'Trained and benchmarked 4 regression models (LightGBM, Ridge, MLP, Optuna-tuned TabularMLP) on 4,169 real BMW dealer orders to predict vehicle days-on-lot across 16 models; applied counterfactual scoring to rank color-upholstery-wheel specs by predicted sell speed.',
      'Deployed SHAP-driven explainable recommendations via Flask REST API with live inference and 0–100 confidence scoring; built an interactive full-stack dealer dashboard enabling data-informed inventory spec decisions without requiring ML expertise.',
    ],
    github: 'https://github.com/Shreya-Mendi',
    demo: null,
    featured: false,
    npo: false,
  },
  {
    id: 'safe-t',
    title: 'Safe-T',
    subtitle: 'AI Equity Audit for Transportation Safety',
    tech: ['Algorithmic Fairness', 'GIS', 'Leaflet', 'Python', 'Census Data', 'NCDOT'],
    tags: ['active', 'fairness'],
    date: '2025 – 2026',
    status: 'done',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80',
    brief: 'Founded a registered NPO to audit Durham, NC transportation AI for racial & economic bias. Open-data methodology replicable across any US city.',
    bullets: [
      'Founded a registered NPO to audit transportation AI allocation algorithms for racial and economic bias across Durham, NC; identified that Black residents (32% of population) experience 47% of pedestrian/cyclist crashes, caused by systematic 20–30% demand undercounting in low-income census tracts.',
      'Benchmarked multiple fairness intervention frameworks against Census, NCDOT crash records, and OpenStreetMap data; built an interactive Leaflet platform visualizing AI-predicted vs. need-based infrastructure gaps across income quintiles with a replicable open-data audit methodology.',
    ],
    github: 'https://github.com/Shreya-Mendi',
    demo: null,
    featured: true,
    npo: true,
  },
  {
    id: 'cinestyle',
    title: 'CineStyle',
    subtitle: 'Multimodal Fashion Discovery from Film & TV',
    tech: ['FashionCLIP', 'FAISS', 'NeuMF', 'SASRec', 'Next.js', 'FastAPI', 'Railway'],
    tags: ['nlp', 'cv'],
    date: '2025',
    status: 'done',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
    brief: 'Capture a TV frame → identify the outfit → get shoppable matches. Four-stage pipeline from FAISS to SASRec Transformer.',
    bullets: [
      'Built a film-to-fashion identification platform using FashionCLIP (512-dim embeddings) and FAISS GPU vector search over 20,000 Fashionpedia garment crops across 46 categories; four-stage pipeline (FAISS → NeuMF → SASRec → diversity filter) achieving measurable NDCG@10 gains over popularity baseline.',
      'Deployed FastAPI on Railway and Next.js on Vercel with price-aware recommendations powered by a fashion intelligence agent; evaluated on Precision@K, Recall@K, and MAP@K with 500 synthetic users × 30 interactions across 6 persona profiles.',
    ],
    github: 'https://github.com/Shreya-Mendi/CineStyle',
    demo: 'https://cine-style-omega.vercel.app/',
    featured: true,
    npo: false,
  },
  {
    id: 'mirror',
    title: 'Mirror',
    subtitle: 'Reflective AI Mental Wellness Companion',
    tech: ['RAG', 'FastAPI', 'Railway', 'NLP', 'CBT', 'IFS', 'NVC'],
    tags: ['nlp', 'fairness'],
    date: '2025',
    status: 'done',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    brief: 'AI journaling companion using RAG over 8 psych frameworks — cognitive distortion profiling, weekly self-awareness reports.',
    bullets: [
      'Built a reflective AI journaling companion using RAG over 8 psychological frameworks (CBT, IFS, NVC, Attachment Theory) to pattern-match emotional entries; implemented cognitive distortion profiling across 4 distortion types and weekly self-awareness reports.',
      'Deployed full-stack Python/FastAPI on Railway with session persistence, mood trend tracking (1–10 daily score), and a trigger map logging recurring situational and relational patterns — maintaining conversation continuity without overstepping into clinical territory.',
    ],
    github: 'https://github.com/Shreya-Mendi/Mirror',
    demo: null,
    featured: false,
    npo: false,
  },
  {
    id: 'mindguard',
    title: 'MindGuard',
    subtitle: 'AI Safety Benchmark — Mental Health Crisis Response',
    tech: ['Benchmark Design', 'NLP', 'Python', 'AI Safety', 'Statistical Analysis'],
    tags: ['nlp', 'fairness'],
    date: '2026',
    status: 'done',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80',
    brief: '1,200-prompt safety benchmark across 5 severity tiers — GPT-4 scored 0.847 vs. human counselor baseline of 0.961.',
    bullets: [
      'Developed a benchmark of 1,200 expert-annotated synthetic prompts across 5 clinically-validated severity tiers to evaluate AI model safety calibration in mental health crisis scenarios; achieved Fleiss\' Kappa >0.8 inter-rater reliability.',
      'Designed a composite safety score weighting Calibration Accuracy (40%), Critical Miss Rate (40%), Consistency (10%), and Over-Escalation Rate (10%); benchmarked GPT-4 (0.847) against a human counselor baseline (0.961), surfacing critical safety gaps.',
    ],
    github: 'https://github.com/Shreya-Mendi',
    demo: null,
    featured: false,
    npo: false,
  },
  {
    id: 'style2fit',
    title: 'Style2Fit',
    subtitle: 'Situation-Aware Fashion Recommendation Pipeline',
    tech: ['QLoRA', 'LLaMA 3.1', 'Stable Diffusion XL', 'FastAPI', 'Next.js', 'LoRA'],
    tags: ['cv', 'nlp'],
    date: 'Mar 2026',
    status: 'done',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    brief: 'Fine-tuned LLaMA 3.1 8B + SDXL via LoRA to turn a situation prompt into a full outfit plan with visual preview. 100% format compliance.',
    bullets: [
      'Fine-tuned LLaMA 3.1 8B via QLoRA (r=16, 3 epochs, 540 training pairs) and Stable Diffusion XL via LoRA (2,000 steps) to convert natural language situation prompts into structured 7-field outfit plans with full-body visual previews; achieved 100% format compliance vs. unstructured prose from the base model.',
      'Designed an end-to-end generative pipeline (FastAPI + Gradio + Next.js) combining fine-tuned LLM planning with SDXL image generation; evaluated on 30 held-out pairs across ROUGE-L, format compliance, and aesthetic diversity metrics.',
    ],
    github: 'https://github.com/Shreya-Mendi',
    demo: null,
    featured: false,
    npo: false,
  },
  {
    id: 'poolcue',
    title: 'PoolCue-Assist',
    subtitle: 'Real-Time Billiards Stroke Analyzer',
    tech: ['Raspberry Pi', 'IMU', 'MPU6050', 'Scikit-learn', 'Embedded Systems', 'Python'],
    tags: ['cv', 'active'],
    date: '2026',
    status: 'done',
    image: 'https://images.unsplash.com/photo-1589922585570-5e82afc82a01?auto=format&fit=crop&w=800&q=80',
    brief: 'Wearable IMU cue sensor with 129–246× variance separation between good/bad strokes. Real-time LCD + LED + audio feedback at ~100 Hz.',
    bullets: [
      'Designed a wearable IMU system on a Raspberry Pi 4 using an MPU6050 sensor to classify billiards strokes as GOOD/BAD via a Decision Tree classifier; achieved high F1 across 5-fold cross-validation with ~100 Hz inference and <1s feedback latency.',
      'Identified 129–246× rotational variance separation between good and bad strokes; delivered real-time feedback via LCD, RGB LEDs, and audio — no coach required.',
    ],
    github: 'https://github.com/Shreya-Mendi/PoolCue-Assist',
    demo: null,
    featured: false,
    npo: false,
  },
  {
    id: 'sourcing-happiness',
    title: 'Sourcing Happiness',
    subtitle: 'World Happiness Report Analysis',
    tech: ['Python', 'Pandas', 'Data Visualization', 'Statistical Analysis', 'Matplotlib'],
    tags: ['fairness'],
    date: '2026',
    status: 'done',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    brief: '150+ countries, 2019–2024. Animated visualizations tracing GDP, social support, and happiness scores over time.',
    bullets: [
      'Analyzed World Happiness Report data (2019–2024) across 150+ countries to identify regional and temporal trends; built animated comparative visualizations communicating macroeconomic and social wellbeing patterns.',
      'Applied statistical correlation techniques to surface relationships between GDP, social support, and happiness scores across income groups, with cross-national comparisons highlighting systemic disparities.',
    ],
    github: 'https://github.com/Shreya-Mendi',
    demo: null,
    featured: false,
    npo: false,
  },
  {
    id: 'ai-audit',
    title: 'AI Audit',
    subtitle: 'EU AI Act Compliance System',
    tech: ['TF-IDF', 'Logistic Regression', 'FastAPI', 'MLflow', 'GCP Cloud Run', 'Streamlit'],
    tags: ['mlops', 'fairness'],
    date: 'Nov 2025',
    status: 'done',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    brief: 'Compliance classifier mapping AI behavior to EU AI Act articles. Deployed on GCP Cloud Run with MLflow tracking.',
    bullets: [
      'Built an explainable compliance classifier (TF-IDF + logistic regression + rule-based checks) mapping system behavior to EU AI Act articles (5, 6, 9, 10, 14); deployed FastAPI + Streamlit UI on GCP Cloud Run with MLflow experiment tracking.',
      'Designed a rule-based NLP pipeline to automatically surface regulatory article violations, reducing manual compliance review effort for high-risk AI system documentation.',
    ],
    github: 'https://github.com/lindsaygross/AIAudit',
    demo: null,
    featured: false,
    npo: false,
  },
  {
    id: 'alba',
    title: 'Alba',
    subtitle: 'AI Carbon Footprint Tracker',
    tech: ['Chrome Extension', 'JavaScript', 'Privacy Engineering', 'Emissions Heuristics'],
    tags: ['mlops', 'fairness'],
    date: 'Nov 2025',
    status: 'done',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
    brief: 'Privacy-first Chrome extension computing LLM energy, carbon & water footprints client-side. No server-side data collection.',
    bullets: [
      'Shipped a privacy-first Chrome extension computing LLM energy, carbon, and water footprints client-side using emissions heuristics, eliminating server-side data collection while delivering real-time sustainability insights.',
      'Implemented prompt optimization suggestions and a daily sustainability dashboard to help users reduce LLM resource consumption without sacrificing output quality.',
    ],
    github: 'https://github.com/lindsaygross/Alba',
    demo: null,
    featured: false,
    npo: false,
  },
  {
    id: 'wordle-xai',
    title: 'Wordle XAI Bot',
    subtitle: 'Multimodal Explainable AI Agent',
    tech: ['Multimodal', 'Vision', 'NLP', 'Grad-CAM', 'Saliency Maps', 'XAI'],
    tags: ['cv', 'nlp'],
    date: 'Nov 2025',
    status: 'done',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80',
    brief: 'Multimodal agent that plays Wordle with real-time Grad-CAM saliency maps explaining every guess decision.',
    bullets: [
      'Built a multimodal agent that plays Wordle using vision + NLP models, surfacing token-level saliency maps to explain each guess decision in real time.',
      'Integrated Grad-CAM explainability to trace model errors and visualize attention patterns, enabling transparent human–AI interaction and interpretable failure analysis.',
    ],
    github: 'https://github.com/Shreya-Mendi/Wordle-XAI',
    demo: null,
    featured: false,
    npo: false,
  },
  {
    id: 'supreme-court',
    title: 'Supreme Court Prediction',
    subtitle: 'Explainable ML on SCDB 2025',
    tech: ['Random Forest', 'PDP', 'ICE', 'ALE', 'Feature Engineering', 'XAI'],
    tags: ['fairness', 'nlp'],
    date: 'Oct 2025',
    status: 'done',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    brief: '~13K SCOTUS cases. +15% F1 via feature engineering. PDP/ICE/ALE analysis of top judicial outcome drivers.',
    bullets: [
      'Modeled ~13K Supreme Court cases with Random Forest; applied PDP/ICE/ALE analysis to identify and explain the top predictive drivers of judicial outcomes across case types.',
      'Improved F1-score by ~15% through feature engineering and hyperparameter tuning, achieving ~70% accuracy on held-out case outcome prediction.',
    ],
    github: 'https://github.com/Shreya-Mendi',
    demo: null,
    featured: false,
    npo: false,
  },
  {
    id: 'quietsky',
    title: 'QuietSky',
    subtitle: 'Speech Practice Game with Real-Time ASR',
    tech: ['React', 'FastAPI', 'Whisper', 'VOSK', 'Web Audio API', 'Vite'],
    tags: ['nlp', 'fairness'],
    date: '2025',
    status: 'done',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80',
    brief: '4-mode speech therapy game using Whisper/VOSK ASR. Rewards effort and rhythm — never penalizes disfluencies. Sub-second latency.',
    bullets: [
      'Built a speech-practice game with four gameplay modes using Whisper and VOSK ASR for real-time transcription; evaluated speech continuity, rhythm, and effort without penalizing disfluencies, improving accessibility for non-native speakers and people who stutter.',
      'Developed a FastAPI backend with Web Audio API and ffmpeg for audio capture and processing, delivering end-to-end automatic speech recognition in a full-stack React + Vite application with sub-second response latency.',
    ],
    github: 'https://github.com/Shreya-Mendi/QuietSky',
    demo: null,
    featured: false,
    npo: false,
  },
  {
    id: 'tradecraft',
    title: 'Tradecraft',
    subtitle: 'Multi-Agent AI Paper Trading Platform',
    tech: ['Agentic AI', 'RL', 'Q-Table', 'TypeScript', 'GPT-4o', 'Claude', 'GitHub Models'],
    tags: ['nlp', 'mlops'],
    date: '2025',
    status: 'done',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    brief: '5 specialized AI agents (GPT-4o, Claude, Llama) making coordinated investment decisions with immutable audit trail.',
    bullets: [
      'Orchestrated five specialized AI agents (Macro Researcher, Alpha Signal Designer, Risk Manager, Execution Agent, Compliance Supervisor) using GPT-4o, Claude, and Llama via GitHub Models for coordinated, role-separated investment decisions.',
      'Implemented Q-table reinforcement learning for adaptive execution strategy selection and an immutable audit trail for agent accountability, enabling full compliance logging across all trading decisions.',
    ],
    github: 'https://github.com/Shreya-Mendi/Tradecraft',
    demo: null,
    featured: false,
    npo: false,
  },
  {
    id: 'contextual-boost',
    title: 'Contextual Boost LLMs',
    subtitle: 'Statistical Study on Role-Conditioned Reasoning',
    tech: ['OpenAI API', 'Prompt Engineering', 'McNemar Test', 'Wilcoxon', 'Statistical Analysis'],
    tags: ['nlp'],
    date: '2025',
    status: 'done',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    brief: 'Role-prompting on grad-level STEM: Physics +3pp. Validated with McNemar\'s test, Wilcoxon, and paired t-tests.',
    bullets: [
      'Investigated role-conditioned prompting on graduate-level STEM questions using the OpenAI API; identified domain-specific accuracy shifts (Physics +3pp) and validated statistical significance using McNemar\'s exact test, Wilcoxon signed-rank, and paired t-tests (p=0.65 overall).',
      'Contributed statistical analysis pipeline and domain-level reasoning breakdown across Physics, Astrophysics, and Chemistry for a collaborative LLM prompt engineering study.',
    ],
    github: 'https://github.com/Shreya-Mendi',
    demo: null,
    featured: false,
    npo: false,
  },
  {
    id: 'credit-risk',
    title: 'Credit Risk Analysis',
    subtitle: 'Loan Repayment Prediction · ATM.com',
    tech: ['XGBoost', 'LightGBM', 'Neural Networks', 'AUC-ROC', 'Class Imbalance', 'Scikit-learn'],
    tags: ['mlops', 'fairness'],
    date: 'Sep – Dec 2025',
    status: 'done',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    brief: 'AUC-ROC 0.87 on ATM.com real lending data. XGBoost vs. LightGBM vs. Neural Net benchmark under heavy class imbalance.',
    bullets: [
      'Trained and benchmarked XGBoost, feedforward Neural Network, and LightGBM classifiers to predict 30-day loan repayment probability for ATM.com users; achieved AUC-ROC of 0.87 with precision-recall optimized threshold selection under significant class imbalance.',
      'Engineered borrower financial features and applied hyperparameter tuning across all 3 architectures; leveraged gradient boosting and deep learning to surface nonlinear repayment signals, delivering a production-ready credit scoring pipeline for a real lending partner.',
    ],
    github: 'https://github.com/Shreya-Mendi',
    demo: null,
    featured: false,
    npo: false,
  },
  {
    id: 'semantic-jury',
    title: 'Semantic Jury',
    subtitle: 'Semantic Search Engine for Legal Research',
    tech: ['Sentence Transformers', 'ChromaDB', 'RAG', 'Gradio', 'Vector Search', 'all-MiniLM-L6-v2'],
    tags: ['nlp'],
    date: '2025',
    status: 'done',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5882?auto=format&fit=crop&w=800&q=80',
    brief: 'Natural language queries over SCOTUS case law with citation network discovery. Live demo on HuggingFace Spaces.',
    bullets: [
      'Built a semantic search engine for legal research using sentence-transformers (all-MiniLM-L6-v2) and ChromaDB vector database, enabling natural language queries over case law with citation network discovery.',
      'Deployed a Gradio UI supporting retrieval-augmented search across landmark Supreme Court cases; implemented semantic embeddings and vector similarity search for legal information retrieval.',
    ],
    github: 'https://github.com/Shreya-Mendi/SemanticJury',
    demo: 'https://huggingface.co/spaces/ShreyaMendi/SemanticJury',
    featured: false,
    npo: false,
  },
  {
    id: 'inflationship',
    title: 'Inflationship',
    subtitle: 'Macroeconomic Forecasting',
    tech: ['SARIMAX', 'Time-Series', 'Feature Engineering', 'Rolling Cross-Validation', 'Alt Data'],
    tags: ['mlops'],
    date: 'Sep 2025',
    status: 'done',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    brief: '0.67–1.69% MAPE across CPI categories. Port-traffic alternative data fused with CPI beats pure CPI baselines.',
    bullets: [
      'Engineered a forecasting pipeline fusing port-traffic alternative data with CPI using SARIMAX and ML; achieved 0.67–1.69% MAPE across major CPI categories, outperforming CPI-only baselines via rolling cross-validation.',
      'Designed feature engineering and cross-validation strategy to prevent data leakage across time-series folds, producing statistically robust inflation forecasts across 6 CPI sub-categories.',
    ],
    github: 'https://github.com/Shreya-Mendi/Inflationship',
    demo: null,
    featured: false,
    npo: false,
  },
];

// ── RENDER PROJECT CARDS ──────────────────────────────────────
function statusBadge(p) {
  if (p.status === 'active') return `<span class="card-badge">Active</span>`;
  return `<span class="card-badge card-badge--done">Completed</span>`;
}

function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.tags.includes(filter));

  grid.innerHTML = visible.map(p => {
    const npoTag = p.npo ? `<span class="card-npo-badge">NPO</span>` : '';
    const techTags = p.tech.slice(0, 4).map(t => `<span class="tech-chip">${t}</span>`).join('');
    const githubBtn = p.github ? `<a href="${p.github}" target="_blank" class="card-overlay-btn">GitHub ↗</a>` : '';
    const demoBtn = p.demo ? `<a href="${p.demo}" target="_blank" class="card-overlay-btn card-overlay-btn--demo">Demo ↗</a>` : '';
    const featuredClass = p.featured ? ' card-featured' : '';

    return `
    <article class="project-card${featuredClass}" data-id="${p.id}" tabindex="0" role="button" aria-label="View ${p.title} details">
      <div class="card-img-wrap">
        <img src="${p.image}" alt="${p.title}" class="card-img" loading="lazy" onerror="this.parentElement.classList.add('img-error')">
        <div class="card-img-overlay">
          <div class="card-overlay-actions">
            ${githubBtn}
            ${demoBtn}
            <button class="card-overlay-btn card-overlay-btn--details" data-id="${p.id}">Details →</button>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-tag-row">${p.tech.slice(0,3).map(t => `<span class="card-chip">${t}</span>`).join('')}</div>
        <h3 class="card-title">${p.title}${npoTag}</h3>
        <p class="card-sub">${p.subtitle}</p>
        <p class="card-brief">${p.brief}</p>
        <div class="card-meta">
          <span class="card-date">${p.date}</span>
          ${statusBadge(p)}
        </div>
      </div>
    </article>`;
  }).join('');

  // Stagger fade-in
  const cards = grid.querySelectorAll('.project-card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`;
    requestAnimationFrame(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    });
  });

  // Bind detail buttons and card clicks
  grid.querySelectorAll('[data-id]').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.tagName === 'A') return; // don't open modal when clicking links
      const id = el.dataset.id;
      openModal(id);
    });
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter') openModal(el.dataset.id);
    });
  });
}

// ── MODAL ─────────────────────────────────────────────────────
function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  const modal = document.getElementById('projectModal');
  const body = document.getElementById('modalBody');

  const npoTag = p.npo ? `<span class="modal-npo">🏛️ Registered NPO</span>` : '';
  const bullets = p.bullets.map(b => `<li>${b}</li>`).join('');
  const techAll = p.tech.map(t => `<span class="modal-chip">${t}</span>`).join('');
  const githubBtn = p.github ? `<a href="${p.github}" target="_blank" class="modal-action-btn">GitHub ↗</a>` : '';
  const demoBtn = p.demo ? `<a href="${p.demo}" target="_blank" class="modal-action-btn modal-action-btn--demo">Live Demo ↗</a>` : '';

  body.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${p.image}" alt="${p.title}" class="modal-img" onerror="this.parentElement.classList.add('img-error')">
      <div class="modal-img-gradient"></div>
      <div class="modal-img-meta">
        <span class="modal-date">${p.date}</span>
        ${statusBadge(p)}
        ${npoTag}
      </div>
    </div>
    <div class="modal-content">
      <h2 class="modal-title">${p.title}</h2>
      <p class="modal-subtitle">${p.subtitle}</p>
      <div class="modal-chips">${techAll}</div>
      <ul class="modal-bullets">${bullets}</ul>
      <div class="modal-actions">${githubBtn}${demoBtn}</div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close').focus();
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ── FILTER ────────────────────────────────────────────────────
function initFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

// ── NAV SCROLL ────────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── HAMBURGER ────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ── SCROLL PROGRESS BAR ───────────────────────────────────────
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
  if (progressBar) progressBar.style.width = pct + '%';
}, { passive: true });

// ── CURSOR GLOW (desktop) ────────────────────────────────────
if (window.innerWidth > 991) {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);
  let mx = 0, my = 0, gx = 0, gy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  (function animate() {
    gx += (mx - gx) * 0.08;
    gy += (my - gy) * 0.08;
    glow.style.left = gx + 'px';
    glow.style.top = gy + 'px';
    requestAnimationFrame(animate);
  })();
}

// ── SCROLL REVEAL ────────────────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-text, .fade-in').forEach(el => revealObs.observe(el));

window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal-text').forEach(el => el.classList.add('visible'));
});

// ── STAGGER OBSERVER ─────────────────────────────────────────
function staggerObserve(selector, delay = 80) {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = (i * delay) + 'ms';
    revealObs.observe(el);
  });
}
staggerObserve('.timeline-item', 100);
staggerObserve('.skill-group', 80);
staggerObserve('.stat', 120);
staggerObserve('.fun-card', 70);

// ── COUNT-UP ─────────────────────────────────────────────────
function countUp(el) {
  const text = el.textContent;
  const match = text.match(/(\d+\.?\d*)/);
  if (!match) return;
  const end = parseFloat(match[1]);
  const suffix = text.replace(match[0], '');
  const prefix = text.slice(0, text.indexOf(match[0]));
  const dur = 1400;
  const t0 = performance.now();
  function tick(now) {
    const p = Math.min((now - t0) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + Math.round(end * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const countObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { countUp(e.target); countObs.unobserve(e.target); } });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-num').forEach(el => countObs.observe(el));

// ── ACTIVE NAV ───────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.toggle('nav-active', l.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { threshold: 0.35 }).observe && sections.forEach(s =>
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting)
        navLinks.forEach(l => l.classList.toggle('nav-active', l.getAttribute('href') === '#' + e.target.id));
    });
  }, { threshold: 0.35 }).observe(s)
);

// ── MODAL CLOSE ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initFilter();

  const modal = document.getElementById('projectModal');
  document.querySelector('.modal-close')?.addEventListener('click', closeModal);
  modal?.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});
