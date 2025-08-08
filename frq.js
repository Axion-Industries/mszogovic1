// FRQ Questions Data
const frqData = {
  'ap-stats': [
    {
      title: "Sampling Distribution & Central Limit Theorem",
      question: "A large city survey sampled 20 twelfth-grade students' scores (out of 46) on an economics test. Given the data list, (a) construct a stemplot; (b) describe the distribution's main features; (c) explain why reporting only a measure of center would be misleading.",
      answer: "(a) You'd create a stemplot using the given scores (e.g., stems 0–4).\\n(b) Description should mention shape (possibly skewed/right due to few high scores), range, clusters, gaps, outliers.\\n(c) Because the distribution is varied and likely skewed, center alone (mean or median) wouldn't capture spread or shape, leading to misrepresentation."
    },
    {
      title: "Probability & Binomial Reasoning",
      question: "The relative frequency distribution shows the number of pets (dogs + cats) per household. (a) Find the probability a randomly selected household violates a 3-pet limit law; (b) if 10 households are randomly chosen, what's the probability exactly 2 violate the law?; (c) describe the sampling distribution of the mean number of pets for 150 households.",
      answer: "(a) Sum probabilities for households owning 4+ pets.\\n(b) Use the binomial formula: n=10, p = probability from (a), so P(2) = (10 choose 2)p²(1−p)⁸.\\n(c) By CLT: approximately normal, center = population mean, spread = population SD / √150."
    },
    {
      title: "Experimental Design – Block Randomization",
      question: "In a heat gain experiment comparing window types A and B with 12 positions in a house, (a) devise appropriate blocks for a randomized block design; (b) describe how to assign treatments (window types) to boxes.",
      answer: "(a) Block by house side or matched positions (e.g., north wall vs. south wall) to control for exposure.\\n(b) Randomly assign types A/B within each block (e.g., flip a coin for each pair)."
    },
    {
      title: "Definition of Standard Deviation & Confidence Intervals",
      question: "Explain what s = 2.141 indicates in context, and use that to construct and interpret a confidence interval.",
      answer: "Standard deviation s = 2.141 reflects the typical deviation of discoloration ratings from the mean in the control group. The CI centered on the sample mean ± (critical value × s/√n) gives a plausible range for the population mean discoloration."
    },
    {
      title: "Hypothesis Testing & p-Value Interpretation",
      question: "Researchers test whether drivers are more distracted when using a device. Given a p-value of 0.0683, interpret it and state a conclusion in everyday language.",
      answer: "The p-value 0.0683 is the chance of observing the data (or more extreme) if there really is no increased distraction. Since it's above common α (0.05), we fail to reject H₀—there's not strong evidence that the device increases distraction."
    },
    {
      title: "Geometric Distribution Expectation",
      question: "Let Y be the number of geodes opened until (and including) the first red crystal appears, with given probabilities for y = 1, 2, 3, 4. (i) Compute mean of Y; (ii) interpret the mean.",
      answer: "(i) Mean μ = Σy⋅P(Y=y).\\n(ii) It represents the average number of geodes one would expect to open before finding a red crystal."
    },
    {
      title: "Conditional Probability",
      question: "Among collectors of baseball cards, given 'fewer than 6 months' collectors numbered 91, and 80 of them have majority regular cards, find that conditional probability.",
      answer: "P(regular majority | <6 mo) = 80/91 ≈ 0.879."
    },
    {
      title: "Chi-Square Test",
      question: "Name the appropriate hypothesis test for relationship between collecting duration and card type; state H₀ and Hₐ.",
      answer: "Use a chi-square test of independence.\\nH₀: No association between collecting duration and card type.\\nHₐ: There is an association."
    },
    {
      title: "Test Conclusion",
      question: "Given p-value = 0.0075 and conditions met, what conclusion?",
      answer: "Since 0.0075 < 0.05, reject H₀. There is evidence of a statistically significant association between months collecting and card-type majority."
    },
    {
      title: "Descriptive Statistics & Distribution Shape",
      question: "Based on a dotplot and summary stats for whistle prices, describe shape and identify outliers using 1.5×IQR rule.",
      answer: "Describe skewness (e.g., symmetric, right/left skew), modality, spread using summary stats. For outliers: calculate IQR, then any point beyond Q1 – 1.5×IQR or Q3 + 1.5×IQR is an outlier."
    }
  ],
  'algebra2-honors': [
    {
      title: "Rational Expression Simplification",
      question: "Simplify the expression (x² - 9)/(x² - 5x + 6). Also state any restrictions on x.",
      answer: "Factor numerator and denominator:\\n(x-3)(x+3)/[(x-2)(x-3)] = (x+3)/(x-2),\\nwith restrictions x ≠ 2, 3 (to avoid division by zero)."
      answer: "(x-3)(x+3)/[(x-2)(x-3)] = (x+3)/(x-2),\\nwith restrictions x ≠ 2, 3 (to avoid division by zero)."
    },
    {
      title: "Piecewise Function Evaluation & Domain",
      question: "Given f(x) = {2x+1, x≤0; x²-4, x>0}, find f(-2), f(3), and state the domain of f.",
      answer: "f(-2) = 2(-2)+1 = -3\\nf(3) = 3² - 4 = 5\\nDomain is all real numbers."
    },
    {
      title: "Quadratic Vertex Form Conversion",
      question: "Rewrite y = 2x² - 8x + 3 in vertex form and identify the vertex.",
      answer: "Complete the square:\\ny = 2(x² - 4x) + 3 = 2[(x-2)² - 4] + 3 = 2(x-2)² - 8 + 3 = 2(x-2)² - 5.\\nVertex: (2, -5)."
    },
    {
      title: "Complex Number Arithmetic",
      question: "Compute (2 + 3i)(1 - 4i).",
      answer: "Use FOIL:\\n2⋅1 + 2⋅(-4i) + 3i⋅1 - 3i⋅4i = 2 - 8i + 3i - 12i² = 2 - 5i + 12 = 14 - 5i."
    },
    {
      title: "Exponential & Logarithmic Equations",
      question: "Solve for x: 5^(2x-1) = 125.",
      answer: "Recognize 125 = 5³. So 2x - 1 = 3 leads to x = 2."
    },
    {
      title: "Inverse Function Determination",
      question: "Find the inverse of f(x) = (3x-2)/(x+1), and state its domain.",
      answer: "Let y = (3x-2)/(x+1). Solve for x:\\ny(x+1) = 3x-2 ⟹ xy+y = 3x-2 ⟹ y+2 = x(3-y) ⟹ x = (y+2)/(3-y).\\nThus, f⁻¹(x) = (x+2)/(3-x), with domain x ≠ 3."
    },
    {
      title: "Polynomial Long Division",
      question: "Divide x³ + 2x² - x - 2 by x - 1.",
      answer: "By synthetic or long division:\\nSynthetic with root x = 1: coefficients 1, 2, -1, -2 → quotient: x² + 3x + 2, remainder 0.\\nSo (x³ + 2x² - x - 2)/(x - 1) = x² + 3x + 2."
    },
    {
      title: "Absolute Value Equation",
      question: "Solve |2x - 5| = 7.",
      answer: "Set up two cases:\\n2x - 5 = 7 → 2x = 12 → x = 6\\n2x - 5 = -7 → 2x = -2 → x = -1"
    },
    {
      title: "Arithmetic Sequence Word Problem",
      question: "A sequence increases by 4 each time and the first term is 7. Write a formula for the n-th term and find the 20th term.",
      answer: "Arithmetic sequence: aₙ = 7 + (n-1)⋅4 = 4n + 3. Then a₂₀ = 4(20) + 3 = 83."
    },
    {
      title: "Exponential Modeling",
      question: "The population of a town grows according to P = 5000⋅(1.02)ᵗ, where t is in years. What is the population after 10 years?",
      answer: "Compute:\\nP(10) = 5000⋅(1.02)¹⁰ ≈ 5000⋅1.21899 ≈ 6095.\\nApproximately 6,095 people."
    }
  ],
  'algebra2-regular': [
    {
      title: "Polynomial Graph Analysis",
      question: "The graphs of two polynomials f and g are shown, and you can identify all their zeros. (a) Explain why one is a 4th-degree polynomial and the other is not. (b) Justify which function has a positive leading coefficient and which has a negative one. (c) List the zeros of each function. (d) Explain how they can share the same zeros despite different degrees.",
      answer: "(a) The 4th-degree must have up to four turning points or behave like x⁴ as x→∞.\\n(b) If a curve rises on the right, its leading coefficient is positive; if it falls, negative.\\n(c) Zeros are the x-intercepts (stated from graph).\\n(d) They can share zeros if the 4th-degree has multiple (repeated) roots while the other is a lower-degree polynomial having only single multiplicity roots."
    },
    {
      title: "Imaginary Powers & Equations",
      question: "(a) Simplify powers of i: i, i², i³, i⁴. (b) Evaluate i⁵. (c) Solve the equation z² + 1 = 0. (d) Find the product of the solutions from part (c).",
      answer: "(a) i = i, i² = -1, i³ = -i, i⁴ = 1.\\n(b) i⁵ = i × i⁴ = i.\\n(c) Solutions are z = i and z = -i.\\n(d) Product: (i)(-i) = -i² = 1."
    },
    {
      title: "Systems via Matrices (Mixtures)",
      question: "A cleaner has 70% water, 26% active chemicals, 4% scent; another has 72% water, 25% active, 3% scent; a third has 73% water, 27% active chemicals. They have supplies: 5,500 g water, 2,000 g active, 130 g scent. (a) Set up a matrix system. (b) Solve how many grams of each cleaner can be made.",
      answer: "(a) Use a 3×3 coefficient matrix (percentages) times vector of batch quantities = resource vector.\\n(b) Solve via matrix methods (e.g., inverse or elimination) to find batch amounts."
    },
    {
      title: "Polynomial Behavior & Extrema",
      question: "A polynomial function h(x) is graphed. (a) What is its degree (justify)? (b) Estimate its absolute minimum. (c) Approximate its maximum on the given interval. (d) Determine its range.",
      answer: "(a) Degree deduced by number of rises/falls or turning points.\\n(b) Identify lowest point on graph.\\n(c) Highest point within interval.\\n(d) Range: from lowest to highest y-value observed."
    },
    {
      title: "Transforming Rational Expressions",
      question: "Rewrite the expression f(x) = (2x+1)/(x-1) in the form q(x) + r/(x-1). Explain how that reveals the horizontal asymptote.",
      answer: "Divide: 2x+1 = 2(x-1) + 3, so f(x) = 2 + 3/(x-1). The horizontal asymptote is y = 2."
    },
    {
      title: "Binomial Expansion & Pascal's Triangle",
      question: "Expand (2x-1)⁴ using Pascal's Triangle. What is the middle term in the expansion of (x²+2)¹⁸?",
      answer: "Use coefficients from 1,4,6,4,1: (2x)⁴ - 4(2x)³ + 6(2x)² - 4(2x) + 1. For the middle term of (x²+2)¹⁸: the 10th term (index 9) has coefficient (18 choose 9)⋅(x²)⁹⋅2⁹."
    },
    {
      title: "Conic Sections Identification",
      question: "Identify the conic and center/vertex: (a) 4x² + 36y² = 16 (b) y = 3x² - 6x + 9 — find its vertex.",
      answer: "(a) Divide both sides by 16: x²/4 + y²/(4/9) = 1. It's an ellipse.\\n(b) Vertex via completing the square: y = 3(x² - 2x) + 9 = 3[(x-1)² - 1] + 9 = 3(x-1)² + 6. Vertex: (1, 6)."
    },
    {
      title: "Permutation & Multiple-Event Probability",
      question: "(a) Compute ₇P₂. (b) Two independent events: P(A) = 3/10, P(B) = 2/3. Find P(A and B).",
      answer: "(a) ₇P₂ = 7 × 6 = 42.\\n(b) Assuming independence: P(A∩B) = 3/10 × 2/3 = 1/5."
    },
    {
      title: "Probability of None Occurring",
      question: "If the chance of rain each of the next three days is 30%, what's the probability it does not rain on all three days?",
      answer: "Non-rain probability each day = 0.70. So probability none = 0.7³ = 0.343."
    },
    {
      title: "Descriptive Statistics: Median & SD",
      question: "For the data set {28, 26, 40, 37, 39, 29, 31, 33, 33, 33, 31, 36}, find the median and standard deviation.",
      answer: "Sorted data: {26, 28, 29, 31, 31, 33, 33, 33, 36, 37, 39, 40}. Median = average of 6th and 7th terms: (33 + 33)/2 = 33. SD: compute using the standard formula—find mean, squared deviations, divide by n−1, then square root."
    }
  ]
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  const navButtons = document.querySelectorAll('.nav-btn');
  const contentContainer = document.getElementById('frq-content');

  // Load initial content (AP Stats)
  loadContent('ap-stats');

  // Add event listeners to navigation buttons
  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      const subject = this.getAttribute('data-class');

      // Update active button
      navButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Load content for selected subject
      loadContent(subject);
    });
  });

  function loadContent(subject) {
    const questions = frqData[subject];
    if (!questions) return;

    let html = `<h2>${getSubjectTitle(subject)} Practice Questions</h2>`;
    

    questions.forEach((question, index) => {
      html += `\n        <div class=\"frq-question\">\n          <h3>Question ${index + 1}: ${question.title}</h3>\n          <p><strong>Question:</strong> ${question.question}</p>\n          <details>\n            <summary>Show Solution</summary>\n            <div class=\"answer-content\">\n              <p><strong>Answer:</strong></p>\n              <p>${question.answer.replace(/\\n/g, '<br>')}</p>\n            </div>\n          </details>\n        </div>\n      `;
      html += `\n        <div class="frq-question">
          <h3>Question ${index + 1}: ${question.title}</h3>
          <p><strong>Question:</strong> ${question.question}</p>
          <details>
            <summary>Show Solution</summary>
            <div class="answer-content">
              <p><strong>Answer:</strong></p>
              <p>${question.answer.replace(/\n/g, '<br>')}</p>
            </div>
          </details>
        </div>`;
    });

    contentContainer.innerHTML = html;
  }

  function getSubjectTitle(subject) {
    const titles = {
      'ap-stats': 'AP Statistics',
      'algebra2-honors': 'Algebra 2 Honors',
      'algebra2-regular': 'Algebra 2 Regular'
    };
    return titles[subject] || subject;
  }
});
