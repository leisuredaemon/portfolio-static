// Test function
function testJS() {
    alert('JavaScript is working!');
    console.log('JavaScript test function called');
    console.log('openProjectModal function exists:', typeof openProjectModal);
    console.log('Projects object exists:', typeof projects);
}

// Immediate test
console.log('Script loading...');
console.log('testJS function defined:', typeof testJS);

// Project data
const projects = {
  // ML & Data Science Projects (8 total)
  'ml-1': {
    title: 'Credit Score Prediction with XAI techniques',
    description: 'Credit Score Prediction with XAI — Built a high-accuracy credit score regressor from 304 numeric features using rigorous missing-data analysis (MCAR/MAR/MNAR), MICE imputation, feature selection (RFE), and strong baselines with LightGBM.',
    category: 'ml-data-science',
    image: '',
    links: {
      github: 'https://github.com/charan11sv/credit-score-prediction-with-XAI-techniques/',
      kaggle: 'https://www.kaggle.com/code/charansv/',
      googleDocs: '',
      dataset: ''
    },
    isOngoing: false,
    order: 8,
    detailedContent: `# Credit Score Prediction with XAI techniques

## Objective
Develop a reliable machine learning pipeline to predict continuous credit scores from 304 numeric features while ensuring fairness, interpretability, and compliance with domain rules.

## Approach & Techniques
- Conducted missing-data diagnostics (MCAR/MAR/MNAR) and applied MICE (Iterative Imputer) to handle large-scale missingness robustly.
- Built a LightGBM baseline model, tuned for accuracy and regularization, and applied Recursive Feature Elimination (RFE) for feature selection.
- Designed a Neural Monotonic Additive Model (NMAM) to enforce monotonic relationships on key drivers (e.g., higher income should not lower scores).
- Applied Explainable AI (XAI) methods including SHAP / TreeSHAP, global feature importance, and local instance explanations to ensure transparent decision-making.

## Results
- LightGBM achieved MAE ≈ 17 and R² ≈ 0.96 on a 20k hold-out validation set, setting a strong performance benchmark.
- NMAM underperformed slightly in raw metrics but demonstrated valuable monotonic interpretability for policy and compliance contexts.

## Learnings
- Tree-based ensembles (LightGBM) remain highly effective for numeric tabular data when combined with rigorous imputation.
- Monotonic neural models are powerful for regulatory transparency, even if accuracy trade-offs exist.
- XAI techniques (SHAP, monotone partials) are crucial not only for interpretability but also for building stakeholder trust in high-stakes domains like credit scoring.

[Kaggle Notebook](https://www.kaggle.com/code/charansv/credit-score)`
  },

  'ml-2': {
    title: 'Indian Real Estate Price Pipeline',
    description: 'Goal. Build a fully reproducible pipeline that scrapes listings from popular Indian real-estate portals, constructs a clean, analysis-ready dataset, performs exploratory analysis and outlier handling, and trains models to power a price (monthly rent) estimator.',
    category: 'ml-data-science',
    image: '',
    links: {
      github: 'https://github.com/charan11sv/Bangalore-real-estate',
      kaggle: 'https://www.kaggle.com/code/charansv/',
      googleDocs: '',
      dataset: ''
    },
    isOngoing: false,
    order: 7,
    detailedContent: `# Indian Real Estate Price Pipeline

## Objective
Build a fully reproducible pipeline that scrapes Indian real-estate listings, cleans and structures the data, analyzes pricing patterns, and trains machine learning models to power a rent calculator tool.

## Approach & Techniques
- **Data Collection**: Automated property listing extraction with Selenium, handling infinite scroll and dynamic content.
- **Data Processing**: Built structured datasets (.csv/.json), standardized categorical/numeric fields, and applied EDA with outlier trimming.
- **Modeling**: Trained regression models including Random Forest, Gradient Boosting, and a Keras Neural Network using features like location, size, furnishing status, and building age.
- **Pipeline Design**: Implemented an sklearn preprocessing + modeling pipeline with imputation, one-hot encoding, and a reusable predict_rent() function (rent calculator).

## Results
- Successfully created a city-wide rental dataset for Bangalore.
- Delivered a working rent prediction tool that estimates monthly rents based on property features.
- Achieved meaningful baseline performance (MAE in rent prediction; exact metrics to be updated after runs).

## Learnings
- Handling dynamic web pages (infinite scroll, JS-rendered data) requires robust scraping strategies with retries, waits, and anti-ban measures.
- EDA with quantile-based trimming improves downstream modeling stability in heavy-tailed markets like real estate.
- Tree ensembles (RF/GBR) work reliably for heterogeneous tabular data, while neural networks need careful scaling and tuning.

[Kaggle Notebooks](https://www.kaggle.com/code/charansv/realtor-url-extraction)`
  },

  'ml-3': {
    title: 'CIBMTR - Survival Analysis',
    description: 'My solution to CIBMTR Kaggle competition. The goal was to Rank patients by post-HCT event-free survival (EFS) risk, where events include EFS-defined adverse outcomes; censoring indicates incomplete follow-up.',
    category: 'ml-data-science',
    image: '',
    links: {
      github: 'https://github.com/charan11sv/CIBMTR-survival-analysis/',
      kaggle: 'https://www.kaggle.com/sv/',
      googleDocs: '',
      dataset: ''
    },
    isOngoing: false,
    order: 4,
    detailedContent: `# CIBMTR Survival Analysis — Theory-Backed Kaggle Submission

## Problem
The competition asked participants to **rank patients by post-HCT event-free survival (EFS) risk**, where:
- **Events** = defined adverse outcomes.
- **Censoring** = incomplete follow-up.

**Constraints:**
1. Leaderboard scoring was based on **concordance index (C-index)** — a ranking objective.
2. **Equity** was emphasized — models had to perform fairly across demographic subgroups.
3. Predictions had to output a **monotone risk score** (ranking preserved under monotone transformations).

## Solution
I built a **theory-driven pipeline** that integrates survival analysis fundamentals with practical machine learning.

**System Workflow:**
1. **Data audit & preprocessing** - Inspected missingness and distributions, dropped constants/near-constants.
2. **Imputation with PMM (MICE)** - Used Iterative Imputer with Predictive Mean Matching (stochastic donor-based fills).
3. **Target engineering (Nelson–Aalen cumulative hazard)** - Computed non-parametric cumulative hazard estimates.
4. **Modeling (LightGBM Regressor)** - Mixed categorical + numeric features, trained on negative cumulative hazard.
5. **Submission** - Produced submission.csv with ID + prediction.

## Techniques & Approaches
- **Nelson–Aalen labels** — non-parametric, assumption-light, censoring-aware.
- **Margin-based censoring adjustment** — separated censored vs. event cases at equal times.
- **PMM imputation (MICE)** — preserved distributional fidelity.
- **Gradient boosting (LightGBM)** — efficient, interpretable, strong on tabular mixed-type data.

## Impact
This pipeline provided a **clean, theory-backed baseline** that ranked patients fairly and robustly, emphasizing **interpretability and survival-theory alignment** while leveraging modern ML for strong leaderboard performance.`
  },

  'ml-4': {
    title: 'Testing with Custom Cluster based GNN Architectures',
    description: 'Goal : Compare multiple clustering techniques on the Telco Churn dataset, understand which K (number of clusters) is appropriate for each method, and then propose & evaluate a custom cluster-aware GNN.',
    category: 'ml-data-science',
    image: '',
    links: {
      github: 'https://github.com/charan11sv/custom-cluster-based-GNN-architectures-on-churn-data',
      kaggle: 'https://www.kaggle.com/sv/',
      googleDocs: '',
      dataset: ''
    },
    isOngoing: false,
    order: 3,
    detailedContent: `# Cluster-Driven Churn Modeling with Custom GNNs

## Objective
The primary objective of this project was to **design and evaluate new custom Graph Neural Network (GNN) architectures** and test their effectiveness on a well-known benchmark dataset.

To ground the study, I used the **Telco Customer Churn dataset** as a standard real-world test case. The project explored how **clustering techniques** could be incorporated into GNN pipelines as an additional relational prior, and whether this would lead to measurable improvements over vanilla GAT/GCN baselines.

## Project Overview
Customer churn prediction is a key challenge for subscription-based businesses. Traditional models often fail to capture hidden community structures in customer behavior, especially when dealing with **imbalanced datasets** (few churners vs many non-churners).

This project explores **cluster-driven graph learning** to evaluate new GNN architectures on the **Telco Churn dataset (7k+ records)**. The study compares multiple **clustering techniques**, evaluates the right number of clusters (**K**) per method, and proposes a **custom cluster-aware GNN**.

## Key Results
- **Baseline LightGBM**: Acc. 0.73 | Recall (churn) 0.78 | F1 0.61.
- **Vanilla GAT/GCN**: Recall improved (0.70–0.77), F1 up to 0.67.
- **Custom GNN + clustering**:
  - **LCA (K=5)** → Best minority F1 = 0.68, Recall = 0.77.
  - **ClusterGAN (K=2)** → Strong geometry, F1 = 0.66, Recall = 0.72.

[Kaggle Notebooks](https://www.kaggle.com/code/charansv/churn-hierarchical-gower-and-lca)`
  },

  'ml-5': {
    title: 'Conventional + Custom GNN based auto encoders for fraud detection',
    description: 'Testing both conventional supervised learning techniques and unsupervised custom GNN-based autoencoders for credit-card fraud detection.',
    category: 'ml-data-science',
    image: '',
    links: {
      github: 'https://github.com/charan11sv/credit-fraud',
      kaggle: 'https://www.kaggle.com/sv/',
      googleDocs: '',
      dataset: ''
    },
    isOngoing: false,
    order: 3,
    detailedContent: `# Credit Card Fraud Detection with Supervised Models & Custom GNN Autoencoders

## Objective
The goal of this project was to **compare conventional supervised learning techniques with unsupervised custom GNN-based autoencoders** for **credit-card fraud detection**.

Fraud datasets are **extremely imbalanced and noisy**. While supervised methods like **LightGBM** are strong baselines, the project explored whether **graph-based autoencoders** could learn geometry-aware embeddings from tabular data and naturally separate fraud from non-fraud transactions without labels.

## Key Results

### Supervised Track
| Model | Accuracy | Precision (fraud) | Recall (fraud) | F1 | AUC |
|-------|----------|--------------------|----------------|----|-----|
| Decision Tree | 99.90% | 66.7% | 71.1% | 68.8% | — |
| Decision Tree + Oversampling | 99.92% | 81.3% | 68.4% | 74.3% | — |
| LightGBM (SMOTE + pos_weight) | 99.99% | 0.989 | 0.926 | 0.957 | 0.997 |

### Unsupervised Track (GNN Autoencoders + Clustering)
- **GAT AE + HDBSCAN** → Multiple micro-clusters, one with **51 fraud / 9 non-fraud** (strong fraud concentration).
- **GCN / ClusterGCN AE + HDBSCAN** → Two large clusters with clear separation:
  - Cluster A: ~56k non-fraud / 25 fraud (~99.96% non-fraud).
  - Cluster B: 49 fraud / 8 non-fraud (~86% fraud).

[Kaggle Notebook](https://www.kaggle.com/code/charansv/credit-fraud)`
  },

  'ml-6': {
    title: 'Synthetic Data Augmentation using CTGAN',
    description: 'This repository documents an extensive set of experiments to generate synthetic data for the Telco Customer Churn dataset using CTGAN.',
    category: 'ml-data-science',
    image: '',
    links: {
      github: 'https://github.com/charan11sv/Data-augmentation-using-CTGAN',
      kaggle: 'https://www.kaggle.com/sv/',
      googleDocs: '',
      dataset: ''
    },
    isOngoing: false,
    order: 6,
    detailedContent: `# Synthetic Data Augmentation with CTGAN – Experiments, Results & Diagnosis

## Objective
The purpose of this project was to **implement the CTGAN paper** on the **Telco Customer Churn dataset** to test its ability for **data augmentation** and evaluate whether the generated synthetic samples preserved the statistical and structural properties of the original data.

## Project Overview
GANs for tabular data, particularly **CTGAN (Conditional Tabular GAN)**, are often proposed as strong methods for synthetic data generation. To validate this, I implemented CTGAN on the churn dataset and conducted a **comprehensive evaluation** of the generated data, with special attention to numeric features (MonthlyCharges, TotalCharges, and tenure).

Despite extensive tuning and experimentation, the results showed that **CTGAN fails to faithfully reproduce numeric distributions and their relationships**, revealing important limitations of the model in real-world tabular contexts.

## Key Results
- **QualityReport (best run)**: Shapes 95.78%, Pair Trends 92.71%.
- **Discriminator test**: Accuracy = 1.0 (perfect separation); another run = 0.91, ROC AUC = 0.78.
- **KS/Wasserstein**: Large deviations for numeric features.
- **Utility (TSTR/TSFR)**: AUC ≈ 0.817, Acc ≈ 0.77.

**Conclusion**: CTGAN could not faithfully model numeric variables like MonthlyCharges and TotalCharges. Discriminator models repeatedly proved that synthetic samples were distinguishable from real ones.

[Kaggle Notebooks](https://www.kaggle.com/code/charansv/customer-churn-data-augmentation)`
  },

  'ml-7': {
    title: 'Multi-Horizon Stock Forecasting',
    description: 'I created a large-scale stock market dataset covering almost all NSE-listed companies with daily data and over 80 engineered features spanning technical indicators, sentiment, macroeconomic, and global signals.',
    category: 'ml-data-science',
    image: '',
    links: {
      github: 'https://github.com/charan11sv/stock-market/',
      kaggle: 'https://www.kaggle.com/sv/',
      googleDocs: '',
      dataset: ''
    },
    isOngoing: false,
    order: 2,
    detailedContent: `# NSE Stock Dataset Creation, Predictive Modeling & Trade Simulation

## Objective
The objective of this project was to **create an extensive real-world stock market dataset** covering almost all **NSE-listed companies (daily data)**, engineer **80+ rich features** spanning technical, macroeconomic, sentiment, and statistical signals, and then use this dataset for downstream experiments such as **predictive modeling** and **trade simulation**.

## Project Overview
The workflow was divided into **three main components**:

1. **Dataset Creation & Feature Engineering**
   - Extracted historical daily stock data for almost all NSE companies (and BSE tickers for completeness).
   - Engineered **80+ features** across categories:
     - **Technical indicators** (RSI, MACD, Bollinger Bands, ATR, etc.)
     - **Volatility & momentum features** (rolling std, rate of change, momentum, acceleration).
     - **Lagged & rolling features** (lagged prices/volumes, rolling returns, rolling Sharpe ratios).
     - **Pattern features** (candlesticks, Fibonacci retracements, pivot points).
     - **Market & global indicators** (Nifty50, SP500, FTSE100, Nikkei225, DAX, INR/USD, crude oil, gold, VIX).
     - **Macroeconomic signals** (exchange rates, inflation proxies, commodity levels).
     - **Sentiment features**: Collected daily financial news from **Reuters, Bloomberg, Economic Times, WSJ, GDELT**, scored with **VADER sentiment analysis**.

2. **Predictive Modeling**
   - Tested **LightGBM** for tabular feature-based forecasting.
   - Prototyped **Transformer-based models** to capture temporal dependencies.
   - Designed an **ensemble (LightGBM + Transformer)** pipeline to combine feature-wise and temporal patterns.

3. **Trade Simulation**
   - Built a **backtesting environment** with transaction costs & slippage, stop-loss/take-profit mechanisms, and position sizing rules.

## Key Results
- **Dataset**: Daily data for almost all NSE companies with **80+ engineered features**.
- **Multi-horizon forecasting (LightGBM)**:
  - 1-day MAPE ≈ **5.9%**, increasing to ~**17%** by day 10.
  - Short-horizon forecasts generalize well; errors grow with horizon length (expected in finance).

[Kaggle Notebooks](https://www.kaggle.com/code/charansv/equity-data-extraction)`
  },

  'ml-8': {
    title: 'ClusterGAN for Regime Discovery on Indian Stocks (NSE)',
    description: 'I adapted ClusterGAN to unlabeled NSE stock data to discover market regimes directly from high-dimensional features (OHLCV, indicators, sentiment, macro, global indices, FX/commodities).',
    category: 'ml-data-science',
    image: '',
    links: {
      github: 'https://github.com/charan11sv/stock-market/tree/main/ClusterGAN%20Implementation%20on%20Stocks',
      kaggle: 'https://www.kaggle.com/code/charansv/stock-cluster-gan-1',
      googleDocs: '',
      dataset: ''
    },
    isOngoing: false,
    order: 1,
    detailedContent: `# ClusterGAN for Regime Discovery on Indian Stocks (NSE)

## Objective
The objective of this project was to **adapt the ClusterGAN paper** for unlabeled **NSE stock data** and test whether it can **discover latent market regimes** directly from high-dimensional features.

Specifically, I wanted to see:
- Whether ClusterGAN could uncover **interpretable regimes** aligned with technical/macro/sentiment signals.
- Whether it would also reveal **latent "mysterious" regimes** driven by exogenous shocks not captured in features — useful for risk detection and alerts.

## Project Overview
Most published ClusterGAN applications focus on "nice" labeled benchmarks like MNIST. In contrast, **financial markets are unlabeled, non-stationary, fat-tailed, and regime-shifting**.

This project used a **large consolidated NSE dataset (~518,000 rows × 92 features)** engineered by me, including:
- **Core OHLCV & technical indicators** (RSI, MACD, Bollinger Bands, ATR, SMA/EMA/WMA, etc.).
- **Momentum & volatility features** (rolling std, Sharpe ratio, ROC, Z-scores, kurtosis/skewness).
- **Lagged & rolling features** (returns, prices, volumes).
- **Sentiment signals** (news sentiment, lagged scores, weighted sentiment metric).
- **Market/global indices** (Nifty50, SP500, FTSE100, DAX, Nikkei225).
- **Macro & risk proxies** (USD/INR, crude oil, gold, VIX).

## Key Results
- **K=7 run**:
  - **4 clusters** were highly explainable from features (clear technical/momentum/volatility regimes).
  - **3 clusters (~10% of data)** were "mysterious/volatile" — not explainable by current features, but systematically formed → likely exogenous shocks (macro/news).
- **Best stability knobs**:
  - Noise std σ ≈ **0.10–0.15**.
  - Clipping ≈ **[−0.6, 0.6]**.

[Kaggle Notebook](https://www.kaggle.com/code/charansv/stock-cluster-gan-1)`
  },

  // Generative AI Projects (3 total)
  'genai-1': {
    title: 'AST-Guided Patch Generation',
    description: 'It implements an end-to-end agent that locates, edits, and verifies code fixes for real GitHub issues (SWE-bench style) under strict constraints (no internet, open weights, ≤30 minutes per served issue).',
    category: 'generative-ai',
    image: '',
    links: {
      github: 'https://github.com/charan11sv/Konwinski-submission',
      kaggle: 'https://www.kaggle.com/code/charansv/konwinski-sub-2',
      googleDocs: ''
    },
    isOngoing: true,
    order: 0,
    detailedContent: `# Konwinski Prize — AST-Guided Patch Generation (Kaggle Competition)

## Problem
The Kaggle Konwinski Prize competition challenged participants to design an AI agent capable of automatically fixing real GitHub issues (SWE-bench style).

**Key constraints:**
- No internet access during scoring.
- Open-source weights and code only.
- ≤ 30 minutes runtime per issue.
- Submissions had to either output a valid unified diff patch, or explicitly skip (since a wrong patch was penalized more than skipping).

## My Solution
I developed a multi-stage agent, implemented in a Kaggle notebook, to locate, edit, and verify code fixes safely. The approach combined LLMs with AST-guided context construction and strict validation to maximize correctness while minimizing false positives.

**System Workflow:**
1. **Locate suspect lines** — LLM extracts two literal code lines (error + preceding line).
2. **Search & filter** — grep repository for those lines, then apply adjacency filter (±1 line).
3. **File selection** — second LLM ranks and selects the most relevant files.
4. **Context construction** — AST-guided backward tracer gathers surrounding code, imports, definitions, and scopes.
5. **Patch synthesis** — LLM generates a unified diff patch.
6. **Mechanical validation** — verify patch format with unidiff parse + patch --dry-run.
7. **Self-verification** — multiple LLM judges vote Yes/No; majority approval is required.
8. **Final decision** — submit patch or safely skip if uncertain.

## Techniques & Approaches
- **Multi-agent LLM pipeline** — separated roles (locator, selector, generator, judge) to reduce error compounding.
- **AST-guided context extraction** — surgical backward tracing of definitions, imports, and scopes for compact yet high-signal prompts.
- **Unified diff generation & validation** — enforced strict compliance with diff format + dry-run application.
- **Voting-based verification** — redundancy through multiple LLM judges to reduce false positives.

[Kaggle Notebook](https://www.kaggle.com/code/charansv/konwinski-sub-2)`
  },

  'genai-2': {
    title: 'AI Induced E-commerce site',
    description: 'Trying out features for AI/LLM induced search, navigation and recommendation for E-commerce applications',
    category: 'generative-ai',
    image: '',
    links: {
      github: 'https://github.com/charan11sv/ai-induced-ecommerce-site',
      kaggle: '',
      googleDocs: ''
    },
    isOngoing: true,
    order: 0,
    detailedContent: `# AI-Powered Multi-Modal Product Search

## Project Overview
This project aims to build an **AI-driven product discovery platform** that allows users to search for products in a **human-like, intuitive way**. Instead of relying only on traditional keyword search, the system supports:

- **Natural language search** → Users can describe what they need (even vaguely) and receive product suggestions.
- **Image-based search** → Users can upload an image to find visually similar products or related categories.
- **Hybrid understanding** → The AI bridges vague human descriptions or visual cues to the actual products available in the inventory.

## Progress So Far

### Implemented Features
1. **Natural Language Search**
   - Accepts vague/free-form queries.
   - LLM reformulates queries into structured search.
   - Performs **web search → product page parsing → local database matching**.

2. **Image-Based Search (Vision API Integration)**
   - Extracts attributes and objects from uploaded images using **Google Cloud Vision**.
   - Converts extracted features into descriptive queries for the LLM.
   - Maps results to available product categories.

3. **Direct Image Similarity Search**
   - Implemented using **open-source image embedding models**.
   - Matches uploaded images with product images in the inventory.

## Tech Stack
- **OpenAI API** → Natural language understanding & query generation.
- **Google Cloud Vision API** → Image feature extraction.
- **Custom Web Scraper** → Retrieves product details for query matching.
- **Open-source Image Models** → Embedding-based similarity search.
- **Database (Inventory)** → Product categories and metadata.`
  },

  'genai-3': {
    title: 'AI Based Social media site',
    description: 'Trying out the approach of having custom algorithms for each user using the llms and optimized search indexing and querying.',
    category: 'generative-ai',
    image: '',
    links: {
      github: 'https://github.com/charan11sv/SM_2',
      kaggle: '',
      googleDocs: ''
    },
    isOngoing: true,
    order: 0,
    detailedContent: `# AI-Based Social Media Platform

## Project Overview
This project aims to build a **social media platform** with a unique feature:
- Users can **describe in natural language** what kind of feed they want.
- The system uses **LLMs + optimized search indexing and querying** to generate a **dynamic, personalized feed** that adapts to the user's request.
- This moves beyond static algorithms or generic personalization, giving users **direct control** over how their content is curated.

## Progress So Far

### Implemented Features
A **basic social media application** has been built as the foundation for testing the main feature. Current capabilities:

- **User Onboarding & Profiles**
  - Registration, login, and profile management.
  - **Email verification** for secure onboarding.

- **Posts Service**
  - Users can create and share posts.
  - Support for **media uploads** (images, videos).

- **Engagement Features**
  - Likes and comments system.
  - Interactive content sharing and feedback loop.

This foundation is **scaled enough for testing** the upcoming **natural language feed customization feature**.

## Summary
The project has already delivered the **core social media foundation** (onboarding, posts, likes, comments, and media support).

The next step is to implement the **main differentiator**:
- Users can **type in natural language what kind of feed they want**, and the platform will generate a **customized, dynamic feed** accordingly.`
  },

  // My Datasets Projects (4 total)
  'dataset-1': {
    title: 'Indian Stock Market & News Feature Factory — Modeling-Ready Parquet with 80+ Engineered Signals',
    description: 'Build a modeling-ready market dataset by combining equity price data (NSE/BSE) with news-driven sentiment and 80+ engineered features.',
    category: 'datasets',
    image: '',
    links: {
      github: 'https://github.com/charan11sv/stock-market/tree/main/Dataset%20creation',
      kaggle: 'https://www.kaggle.com/sv/',
      googleDocs: '',
      dataset: 'https://www.kaggle.com/datasets/charansv/nse-stock-data-with-sentiment-and-80-features/data'
    },
    isOngoing: false,
    order: 1,
    detailedContent: `# Indian Stock Market & News Feature Factory — Modeling-Ready Parquet with 80+ Engineered Signals

> Build a modeling-ready market dataset by combining **equity price data** (NSE/BSE) with **news-driven sentiment** and engineered features.

This repo contains three modular notebooks plus concise docs that together form a reproducible pipeline:
1) **Equity data extraction** → 2) **News sentiment building** → 3) **Final dataset creation & feature engineering**.

## TL;DR
- **What this demonstrates**
  - Practical **ETL** for market data, **NLP** for daily sentiment, and **feature engineering** for ML.
  - Robustness: **failure logs**, **intermediate saves**, and **idempotent** steps.
  - Interpretability: a simple **linear model** to learn weights for a **composite sentiment feature**.
- **What you get**
  - A **final parquet** with technical indicators, market & macro series, lagged sentiment, and a weighted sentiment metric.
  - A **feature glossary** explaining every column.

## Pipeline Overview
Pipeline Flow:
1. BhavCopy CSVs + NSE_tickers.csv + bse_tickers.csv
2. equity data extraction.ipynb (OHLCV per ticker + failure logs)
3. sentiment_scores.ipynb (daily sentiment per company)
4. Dataset creation main.ipynb (feature weights + final parquet)
5. Output: merged_with_weighted_sentiment_final.parquet and feature_weights_final.csv

[Kaggle Notebooks](https://www.kaggle.com/code/charansv/equity-data-extraction)`
  },

  'dataset-2': {
    title: 'Bangalore Real Estate Data',
    description: 'Build a fully reproducible pipeline that scrapes listings from popular Indian real-estate portals.(was used only for private educational and research purposes and hence not redistributed)',
    category: 'datasets',
    image: '',
    links: {
      github: 'https://github.com/charan11sv/Bangalore-real-estate',
      kaggle: 'https://www.kaggle.com/sv/',
      googleDocs: '',
      dataset: ''
    },
    isOngoing: false,
    order: 3,
    detailedContent: `# Bangalore Real Estate Data – Extraction Notebooks (Simple Documentation)

This short doc explains how the two notebooks extract Bangalore real-estate data from a **popular local realtor site** for research/internal analysis.

> Notebooks:
> - Realtor url extraction.ipynb — collects listing **detail page URLs** for selected Bangalore localities.
> - realtor-dataset-creation.ipynb — opens each URL and **scrapes structured fields**, then saves a clean dataset.

## Prerequisites
- **Python** 3.9+
- **Drivers**: Firefox + geckodriver (or Chrome + chromedriver if you switch the driver)
- **Libraries**: selenium, bs4 (BeautifulSoup), pandas, joblib

> **Ethics & Compliance**  
> - Respect the website's **Terms of Service** and **robots.txt**.  
> - Use conservative rate limits and minimal request volume.  
> - Data is for **internal evaluation**/research; do not redistribute raw content.

## Notebook 1 — Realtor url extraction.ipynb

### Goal
Collect property **detail page URLs** across key Bangalore localities to feed the second notebook.

### What it does
1. **Driver setup** - Initializes a Selenium **Firefox** WebDriver (headless optional) and imports helper libs.
2. **(Optional) Login flow** - Some listing details can require login. The notebook contains a login block (via phone/email) using Selenium waits and basic form interactions.
3. **Target localities** - Prepares a list of locality search URLs around Bangalore.
4. **Pagination & URL capture** - Visits each locality's results page, iterates pages (or scrolls) with **explicit waits**.

[Kaggle Notebooks](https://www.kaggle.com/code/charansv/realtor-url-extraction)`
  },

  'dataset-3': {
    title: 'Amazon products dataset',
    description: 'Extraction amazon products dataset for the LLM induced E-commerce recommendation that we are working on. (was used only for private educational)',
    category: 'datasets',
    image: '',
    links: {
      github: '',
      kaggle: 'https://www.kaggle.com/code/charansv/amazon-products-dataset',
      googleDocs: '',
      dataset: ''
    },
    isOngoing: false,
    order: 4,
    detailedContent: `# Simple Dataset — AI-Powered E-commerce (Test Set)

## Overview
This is a **lightweight sample dataset** created to test an AI-driven e-commerce prototype (search, ranking, and recommendations).  
It contains a small, representative set of products with the core attributes needed to validate end-to-end flows.

> Notebook: Amazon products dataset.ipynb  
> Purpose: Generate/clean a compact product dataset for rapid prototyping and model smoke tests.

## What's Inside
- A few dozen to a few hundred **products** across common categories (e.g., Electronics, Home, Fashion).
- Cleaned fields suitable for:
  - **Semantic search & retrieval**
  - **Ranking experiments** (price, popularity, rating)
  - **Recommendation prototypes** (category/brand similarity)

## Schema (Common Fields)
| Column              | Type      | Description                                                   |
|---------------------|-----------|---------------------------------------------------------------|
| product_id          | string    | Stable identifier for the item                               |
| title               | string    | Product name                                                  |
| brand               | string    | Brand/manufacturer (if known)                                 |
| category            | string    | High-level category (e.g., "Electronics > Headphones")        |
| price               | float     | Current price (numeric, no currency symbol)                   |
| currency            | string    | ISO code (e.g., INR, USD)                                     |
| rating              | float     | Average rating (0–5)                                          |
| rating_count        | integer   | Number of ratings/reviews                                     |
| features            | string[]  | Key bullet points/specs                                       |
| description         | string    | Short textual description (for embedding tests)               |
| image_url           | string    | Representative image link (optional)                          |
| product_url         | string    | Source/product page link (optional)                           |
| in_stock            | boolean   | Availability flag                                             |
| created_at          | datetime  | Record creation timestamp                                     |

[Kaggle Notebook](https://www.kaggle.com/code/charansv/amazon-products-dataset)`
  },

  'dataset-4': {
    title: 'Research paper text extraction for finetuning',
    description: 'This was used only for private educational and research purposes and never redistributed.',
    category: 'datasets',
    image: '',
    links: {
      github: '',
      kaggle: 'https://www.kaggle.com/sv/',
      googleDocs: '',
      dataset: ''
    },
    isOngoing: false,
    order: 2,
    detailedContent: `# Research Papers Dataset — Notebook Docs

### Notebooks
- **Research publishings extraction.ipynb** — discovers papers and collects **metadata**, **PDF/HTML links**, and **raw text** (when permitted).
- **512-data-extraction.ipynb** — cleans, normalizes, and **chunks** text (≈512-token windows) to create **training-ready JSONL** for open-source LLM fine-tuning.

### What they do (at a glance)

1. **Discover & Collect**
   - Query research indexes/publisher pages for target topics/keywords.
   - Respect robots.txt, apply polite **rate limits** and retries.
   - Store metadata: paper_id, title, authors, year, venue, doi, url, pdf_url, license?, abstract.

2. **Fetch & Parse**
   - Download HTML/PDF **only when allowed**.
   - Parse HTML (BeautifulSoup) or PDF (pdfminer/pymupdf) → plain text.
   - Normalize whitespace; optionally strip boilerplate (headers/footers/references).

3. **Validate & Deduplicate**
   - Drop duplicates by **DOI** or hash of (title+authors+year).
   - Filter corrupted/short texts; keep language of interest (e.g., en).

4. **Clean & Segment (512-data-extraction)**
   - Section-aware splitting when possible (Abstract, Intro, Methods, …).
   - Tokenize and **chunk to ~512 tokens** with small overlaps to preserve context.
   - Add provenance fields (source, crawl_time, checksum, source_license).

5. **Save Training Files**
   - **Pretraining style**: one text field per chunk.  
   - **Optional SFT formats** (if you generate targets): e.g., summarization or QA tuples.
   - Outputs:
     - papers_raw.jsonl — metadata + raw text (per paper)
     - papers_clean.jsonl — cleaned text + normalized metadata
     - papers_chunks.jsonl — chunked text for training

[Kaggle Notebooks](https://www.kaggle.com/code/charansv/512-research-data-extraction)`
  }
};

// Utility function to convert markdown to HTML using marked.js
function convertMarkdownToHTML(markdown) {
  if (!markdown) return '';
  
  console.log('Converting markdown to HTML...');
  console.log('Marked library available:', typeof marked !== 'undefined');
  
  // Configure marked for better rendering (similar to the original React app)
  if (typeof marked !== 'undefined') {
    try {
      marked.setOptions({
        breaks: true,
        gfm: true,
        sanitize: false
      });
      
      const result = marked.parse(markdown);
      console.log('Markdown converted successfully');
      return result;
    } catch (error) {
      console.error('Error parsing markdown:', error);
      return '<p>Error parsing markdown content.</p>';
    }
  } else {
    // Fallback to basic parsing if marked.js is not loaded
    console.warn('marked.js not loaded, using fallback markdown parser');
    return markdown
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/`([^`]+)`/gim, '<code>$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/^[\s]*[-*] (.*$)/gim, '<li>$1</li>')
      .replace(/^[\s]*\d+\. (.*$)/gim, '<li>$1</li>')
      .replace(/\n\n+/gim, '</p><p>')
      .replace(/\n/gim, '<br>')
      .replace(/^(?!<[h|p|d|b|l|h])/gim, '<p>')
      .replace(/(?<!>)$/gim, '</p>')
      .replace(/<p><\/p>/gim, '')
      .replace(/<p><br><\/p>/gim, '');
  }
}

// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Modal functions
function openProjectModal(projectId) {
  console.log('=== openProjectModal called ===');
  console.log('Project ID:', projectId);
  console.log('Projects object exists:', typeof projects !== 'undefined');
  console.log('Projects object:', typeof projects, projects);
  
  if (typeof projects === 'undefined') {
    alert('Projects object not loaded! Check console for errors.');
    return;
  }
  
  const project = projects[projectId];
  console.log('Project found:', project);
  
  if (!project) {
    console.error('Project not found for ID:', projectId);
    console.log('Available project IDs:', Object.keys(projects));
    alert('Project details not found. Please try again.');
    return;
  }
  
  const modal = document.getElementById('projectModal');
  const details = document.getElementById('projectDetails');
  
  console.log('Modal element:', modal);
  console.log('Details element:', details);
  
  if (!modal || !details) {
    console.error('Modal elements not found');
    alert('Modal elements not found. Please refresh the page.');
    return;
  }
  
  try {
    // Show loading state first
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    details.innerHTML = `
      <h2 class="project-details-title">${project.title}</h2>
      <div class="project-details-description">
        <p>${project.description}</p>
      </div>
      <div class="detailed-content markdown-content">
        <div style="text-align: center; padding: 2rem;">
          <div style="display: inline-block; width: 20px; height: 20px; border: 2px solid #f3f3f3; border-top: 2px solid #3b82f6; border-radius: 50%; animation: spin 1s linear infinite;"></div>
          <p style="margin-top: 1rem; color: var(--text-secondary);">Loading detailed content...</p>
        </div>
      </div>
    `;
    
    // Add CSS for loading animation
    if (!document.getElementById('loading-styles')) {
      const style = document.createElement('style');
      style.id = 'loading-styles';
      style.textContent = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }
    
    // Process markdown content asynchronously
    setTimeout(() => {
      try {
        // Create the project links section
        let projectLinksHTML = '';
        if (project.links) {
          projectLinksHTML = '<div class="project-details-links">';
          if (project.links.github) {
            projectLinksHTML += `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="project-detail-link">GitHub</a>`;
          }
          if (project.links.kaggle) {
            projectLinksHTML += `<a href="${project.links.kaggle}" target="_blank" rel="noopener noreferrer" class="project-detail-link">Kaggle</a>`;
          }
          if (project.links.dataset) {
            projectLinksHTML += `<a href="${project.links.dataset}" target="_blank" rel="noopener noreferrer" class="project-detail-link">Dataset</a>`;
          }
          if (project.links.googleDocs) {
            projectLinksHTML += `<a href="${project.links.googleDocs}" target="_blank" rel="noopener noreferrer" class="project-detail-link">Documentation</a>`;
          }
          projectLinksHTML += '</div>';
        }
        
        const markdownContent = convertMarkdownToHTML(project.detailedContent || 'No detailed content available.');
        
        console.log('Project detailedContent length:', project.detailedContent ? project.detailedContent.length : 0);
        console.log('Markdown content length:', markdownContent ? markdownContent.length : 0);
        console.log('Markdown content preview:', markdownContent ? markdownContent.substring(0, 200) + '...' : 'No content');
        
        details.innerHTML = `
          <h2 class="project-details-title">${project.title}</h2>
          <div class="project-details-description">
            <p>${project.description}</p>
          </div>
          ${projectLinksHTML}
          <div class="detailed-content markdown-content">
            ${markdownContent}
          </div>
        `;
        
        console.log('Modal content loaded successfully');
      } catch (error) {
        console.error('Error processing markdown content:', error);
        details.innerHTML = `
          <h2 class="project-details-title">${project.title}</h2>
          <div class="project-details-description">
            <p>${project.description}</p>
          </div>
          <div class="detailed-content">
            <p>Error loading detailed content. Please try again.</p>
          </div>
        `;
      }
    }, 100); // Small delay to show loading state
    
    console.log('Modal displayed successfully');
  } catch (error) {
    console.error('Error displaying modal:', error);
    details.innerHTML = `
      <h2 class="project-details-title">${project.title}</h2>
      <div class="project-details-description">
        <p>${project.description}</p>
      </div>
      <div class="detailed-content">
        <p>Error loading detailed content. Please try again.</p>
      </div>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  if (event.target === modal) {
    closeProjectModal();
  }
}

// Add fade-in animation to sections
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, projects object:', projects);
  console.log('Available project keys:', Object.keys(projects));
  
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    observer.observe(section);
  });
});

// Add smooth scrolling to all anchor links
document.addEventListener('DOMContentLoaded', function() {
  console.log('=== DOM Content Loaded ===');
  console.log('Script loaded successfully');
  console.log('Projects object:', typeof projects);
  console.log('openProjectModal function:', typeof openProjectModal);
  console.log('testJS function:', typeof testJS);
  
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
});

// Final test
console.log('Script execution completed');
console.log('All functions available:', {
  testJS: typeof testJS,
  openProjectModal: typeof openProjectModal,
  projects: typeof projects
});
