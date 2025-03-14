## **1. What is Data?**
Data is a collection of facts, numbers, words, measurements, or observations used for analysis, interpretation, and decision-making. It is the raw information collected from various sources, which can later be processed to generate meaningful insights.  

### **Examples of Data:**  
- The temperature recorded daily (e.g., 30°C, 32°C, 28°C).  
- Names of students in a class (e.g., Arpit, Rahul, Priya).  
- The number of cars passing a toll booth per hour (e.g., 10, 15, 12, 18).  

---

## **2. Types of Data**  
Data can be broadly classified into **Numerical (Quantitative) Data** and **Categorical (Qualitative) Data**.

-----

### **A. Numerical (Quantitative) Data**
Numerical data represents measurable quantities and can be expressed in numbers. This data is further divided into:  

#### **i. Discrete Data**
- Discrete data consists of countable, finite values.  
- It cannot take every possible value within a given range; only specific values are allowed.  
- It typically represents whole numbers.  

##### **Examples of Discrete Data:**  
- Number of students in a class (10, 20, 30, …)  
- Number of books in a library (100, 150, 200, …)  
- Number of cars in a parking lot (5, 8, 12, …)  

📌 **Key Point:** Discrete data comes from counting. You cannot have half a student or 2.5 books.  

---

#### **ii. Continuous Data**  
- Continuous data represents measurable quantities and can take any value within a given range.  
- It includes decimal values and fractions, meaning it can have infinite possible values within a range.  

##### **Examples of Continuous Data:**  
- Height of students (5.6 ft, 5.8 ft, 6.1 ft, …)  
- Temperature of a city (30.5°C, 32.8°C, …)  
- Weight of an apple (150.2g, 152.8g, …)  

📌 **Key Point:** Continuous data comes from measurement. You can have 5.5 kg, 72.3 cm, etc.  

---

### **B. Categorical (Qualitative) Data**  
Categorical data represents descriptive information that cannot be measured numerically. Instead, it describes characteristics or attributes.  

#### **i. Nominal Data**  
- Nominal data consists of names, labels, or categories.  
- There is no inherent order in the values (one is not greater or lesser than another).  

##### **Examples of Nominal Data:**  
- Eye color (Blue, Green, Brown)  
- Gender (Male, Female, Other)  
- Car brands (Toyota, BMW, Tesla)  
- Types of fruit (Apple, Banana, Mango)  

📌 **Key Point:** You cannot sort or rank nominal data meaningfully.  

---

#### **ii. Ordinal Data**  
- Ordinal data is similar to nominal data but has an inherent order or ranking.  
- The difference between values is not necessarily uniform or measurable.  

##### **Examples of Ordinal Data:**  
- Education Level (High School, Bachelor's, Master's, Ph.D.)  
- Customer Satisfaction Rating (Poor, Fair, Good, Excellent)  
- Clothing Sizes (Small, Medium, Large, Extra Large)  

📌 **Key Point:** Ordinal data has a meaningful order, but the difference between values may not be consistent.  

---

## **Summary Table**

| Type of Data         | Subtype       | Description | Example |
|----------------------|--------------|-------------|---------|
| **Numerical Data**   | Discrete     | Countable, finite values | Number of students in a class (10, 20, 30) |
|                      | Continuous   | Measurable values, can take any value within a range | Height of students (5.6 ft, 5.8 ft, 6.1 ft) |
| **Categorical Data** | Nominal      | Names, labels, no specific order | Car brands (Toyota, BMW, Tesla) |
|                      | Ordinal      | Ordered categories with rankings but unequal differences | Customer Satisfaction (Poor, Fair, Good, Excellent) |

---

## **Key Takeaways**
1. **Numerical data** represents quantities and is divided into **discrete (countable)** and **continuous (measurable)** data.  
2. **Categorical data** represents characteristics and is divided into **nominal (no order)** and **ordinal (ordered but differences not equal)** data.  

## **Measures of Central Tendency**  
Measures of central tendency help summarize a dataset by identifying a single value that represents the center of the data distribution. The three primary measures are:  

- **Mean** (Average)  
- **Median** (Middle value)  
- **Mode** (Most frequent value)  

---

## **1. Mean (Average)**
The **mean** is the sum of all data points divided by the number of data points. It represents the **"average"** value in a dataset.  

### **Formula for Mean**  

\[
\text{Mean} (\bar{x}) = \frac{\sum x_i}{n}
\]

Where:  
- \( x_i \) = Each data value  
- \( n \) = Total number of values  

### **Example**  
Consider the dataset: **5, 10, 15, 20, 25**  

\[
\text{Mean} = \frac{5+10+15+20+25}{5} = \frac{75}{5} = 15
\]

### **Properties of Mean**  
✔ Affected by extreme values (**outliers**)  
✔ Used for normally distributed data  
✔ Applicable to numerical data (not categorical)  

---

## **2. Median (Middle Value)**
The **median** is the middle value of an ordered dataset. It represents the **"central"** position and is **not affected by extreme values** (outliers).  

### **How to Find the Median?**  
1. **Arrange** the data in ascending order.  
2. If **n is odd**, the median is the middle value.  
3. If **n is even**, the median is the average of the two middle values.  

### **Example (Odd Number of Values)**  
Dataset: **4, 8, 11, 13, 17**  
- The middle value is **11** → **Median = 11**  

### **Example (Even Number of Values)**  
Dataset: **3, 6, 9, 12, 15, 18**  
- Two middle values: **9 and 12**  
- Median = \( \frac{9+12}{2} = 10.5 \)  

### **Properties of Median**  
✔ Not affected by extreme values (outliers)  
✔ Best for **skewed data**  
✔ Can be used for **ordinal data** (ordered categories)  

---

## **3. Mode (Most Frequent Value)**
The **mode** is the value(s) that appear most frequently in a dataset. It represents the **most common** observation.  

### **Types of Mode**  
1. **Unimodal**: One mode (single most frequent value)  
2. **Bimodal**: Two modes (two equally frequent values)  
3. **Multimodal**: More than two modes  

### **Example (Unimodal Case)**  
Dataset: **2, 4, 4, 5, 7, 8**  
- Mode = **4** (appears twice)  

### **Example (Bimodal Case)**  
Dataset: **3, 6, 6, 9, 12, 12, 15**  
- Modes = **6 and 12**  

### **Example (Multimodal Case)**  
Dataset: **1, 3, 3, 5, 5, 7, 7, 9**  
- Modes = **3, 5, and 7**  

### **Properties of Mode**  
✔ Works for both **numerical & categorical** data  
✔ Best for identifying common occurrences  
✔ Can be **one or multiple values**  

---

## **Comparison of Mean, Median, and Mode**
| Measure | Definition | Use Case | Sensitive to Outliers? |
|---------|-----------|----------|------------------------|
| **Mean** | Sum of all values divided by count | Best for **symmetrical** data (e.g., height, weight) | **Yes** |
| **Median** | Middle value of an ordered dataset | Best for **skewed** data (e.g., income, house prices) | **No** |
| **Mode** | Most frequent value | Best for **categorical** data (e.g., favorite color, common product sold) | **No** |

---

## **Key Takeaways**
✔ **Mean** is best for normal (symmetrical) data but affected by outliers.  
✔ **Median** is useful for skewed data and is not affected by outliers.  
✔ **Mode** helps identify the most common value and works for categorical data.  

## **Measures of Dispersion**  
Measures of dispersion describe how spread out the data values are in a dataset. They help understand the **variability** and **distribution** of data points.

---

## **1. Range**  
The **range** is the difference between the highest and lowest values in a dataset.

### **Formula for Range**  
\[
\text{Range} = \text{Maximum Value} - \text{Minimum Value}
\]

### **Example**  
Dataset: **4, 7, 10, 15, 22**  
\[
\text{Range} = 22 - 4 = 18
\]

### **Properties of Range**  
✔ Easy to calculate  
✔ Only depends on two values (max & min)  
❌ Does not consider how data is distributed  

---

## **2. Mean Absolute Deviation (MAD)**  
The **Mean Absolute Deviation (MAD)** is the average of the absolute differences between each data point and the mean.

### **Formula for MAD**  
\[
\text{MAD} = \frac{\sum |x_i - \bar{x}|}{n}
\]
Where:  
- \( x_i \) = Each data point  
- \( \bar{x} \) = Mean of the dataset  
- \( n \) = Total number of data points  

### **Example**  
Dataset: **3, 6, 8, 10**  
1. Mean \( \bar{x} = \frac{3+6+8+10}{4} = 6.75 \)  
2. Find absolute differences:  
   - \( |3 - 6.75| = 3.75 \)  
   - \( |6 - 6.75| = 0.75 \)  
   - \( |8 - 6.75| = 1.25 \)  
   - \( |10 - 6.75| = 3.25 \)  
3. MAD:  
\[
\frac{3.75 + 0.75 + 1.25 + 3.25}{4} = 2.25
\]

### **Properties of MAD**  
✔ Easy to interpret  
✔ Less sensitive to extreme values than variance  
❌ Not widely used in statistical models  

---

## **3. Variance**  
Variance measures the **average squared deviation** from the mean. It quantifies how far data points spread from the mean.

### **Formula for Variance**  
For a population:  
\[
\sigma^2 = \frac{\sum (x_i - \mu)^2}{N}
\]  
For a sample:  
\[
s^2 = \frac{\sum (x_i - \bar{x})^2}{n-1}
\]  
Where:  
- \( x_i \) = Each data point  
- \( \mu \) (or \( \bar{x} \)) = Mean  
- \( N \) (or \( n-1 \)) = Number of data points (for a population or sample)  

### **Example**  
Dataset: **4, 8, 12**  
1. Mean \( \bar{x} = \frac{4+8+12}{3} = 8 \)  
2. Squared differences:  
   - \( (4 - 8)^2 = 16 \)  
   - \( (8 - 8)^2 = 0 \)  
   - \( (12 - 8)^2 = 16 \)  
3. Variance:  
\[
\sigma^2 = \frac{16+0+16}{3} = \frac{32}{3} = 10.67
\]

### **Properties of Variance**  
✔ Uses squared differences to remove negatives  
❌ Difficult to interpret because of squared units  

---

## **4. Standard Deviation (SD)**  
The **Standard Deviation (SD)** is the square root of variance. It measures how much data deviates from the mean in original units.

### **Formula for Standard Deviation**  
\[
\sigma = \sqrt{\sigma^2}
\]

### **Example**  
From the previous variance calculation:  
\[
\sigma = \sqrt{10.67} = 3.27
\]

### **Properties of Standard Deviation**  
✔ More interpretable than variance  
✔ Used in most statistical applications  
❌ Sensitive to outliers  

---

# **Measures of the Shape of Distribution**

## **1. Skewness (Symmetry of Data)**  
Skewness measures the **asymmetry** of a distribution.

### **Types of Skewness**  

1. **Positively Skewed (Right Skewed) Distribution**  
   - **Tail extends to the right**  
   - Mean **>** Median **>** Mode  
   - Example: Income distribution, where a few people earn extremely high salaries.  
   - **Graph shape:** 🟠📈 Right tail is longer.  

2. **Negatively Skewed (Left Skewed) Distribution**  
   - **Tail extends to the left**  
   - Mode **>** Median **>** Mean  
   - Example: Age of retirement (most people retire around 60, but a few retire early).  
   - **Graph shape:** 📉🟠 Left tail is longer.  

3. **Normal Distribution (No Skewness)**  
   - **Perfectly symmetric** around the mean.  
   - Mean = Median = Mode.  
   - Example: IQ scores, height of adults.  
   - **Graph shape:** 📊🔔 Bell-shaped curve.  

---

## **2. Kurtosis (Peakedness of Distribution)**  
Kurtosis describes the **tailedness** (how heavy or light the tails are compared to a normal distribution).

### **Types of Kurtosis**  

1. **Leptokurtic (High Kurtosis, \( K > 3 \))**  
   - **Tall & sharp peak**, **heavy tails** (more extreme values).  
   - Example: Stock market crashes.  
   - **Graph shape:** 📈⛰ **Tall, narrow peak.**  

2. **Mesokurtic (Normal Kurtosis, \( K = 3 \))**  
   - **Standard normal distribution**.  
   - Example: Most natural phenomena (IQ scores).  
   - **Graph shape:** 🔔 **Bell curve.**  

3. **Platykurtic (Low Kurtosis, \( K < 3 \))**  
   - **Flat peak**, **thin tails** (few extreme values).  
   - Example: Uniform distributions.  
   - **Graph shape:** 📉 **Broad, flat curve.**  

---

# **Summary Table**
| Measure | Meaning | Example |
|---------|---------|---------|
| **Range** | Difference between max & min values | Height difference in a classroom |
| **Mean Absolute Deviation** | Average absolute deviation from the mean | Error measurement in models |
| **Variance** | Average squared deviation from the mean | Stock market fluctuations |
| **Standard Deviation** | Square root of variance | Spread of students' test scores |
| **Skewness** | Asymmetry of data distribution | Income distribution (right skewed) |
| **Kurtosis** | Peakedness of distribution | Stock market crashes (high kurtosis) |

---

## **Key Takeaways**
✔ **Range** shows the simplest measure of spread.  
✔ **MAD, Variance, and SD** measure variability in different ways.  
✔ **Skewness** tells whether data is left or right skewed.  
✔ **Kurtosis** describes the sharpness of the peak and tail weight.  

# **Understanding Percentiles, Quartiles, Deciles, and Percentage Change**  

---

## **1. Percentiles**  
A **percentile** indicates the value below which a given percentage of data points fall.

### **Essential Conversions**  

#### **(i) Finding the Data Point Corresponding to a Percentile**  
The formula to find the position of a percentile in a dataset:  
\[
P = \frac{N+1}{100} \times k
\]  
Where:  
- \( P \) = Position in the dataset  
- \( N \) = Total number of observations  
- \( k \) = Desired percentile (e.g., 25th percentile for \( k = 25 \))  

#### **(ii) Finding the Percentile Corresponding to a Data Point**  
To find the percentile rank of a given value:  
\[
P = \frac{\text{Number of values below } x}{N} \times 100
\]  

#### **(iii) Finding the Percentile Corresponding to a Rank in an Examination**  
If a student ranks **R** in a class of **N** students:  
\[
P = \left( 1 - \frac{R}{N} \right) \times 100
\]  
Example: If a student ranks 20th in a class of 50:  
\[
P = \left( 1 - \frac{20}{50} \right) \times 100 = 60\text{th percentile}
\]  

#### **(iv) Finding the Rank Corresponding to a Percentile in an Examination**  
Rearrange the previous formula:  
\[
R = (1 - \frac{P}{100}) \times N
\]  

---

### **Methods for Finding Percentiles in Data**  

#### **(i) Using 0-Based Indexing + Linear Interpolation Method**  
1. Arrange data in **ascending order**.  
2. Compute the index:  
   \[
   I = \frac{P}{100} \times (N-1) + 1
   \]
3. If **I is an integer**, take the value at position **I**.  
4. If **I is not an integer**, interpolate between the closest two values.  

#### **(ii) Using the Median Method (For 50th Percentile Only)**  
- The **50th percentile** (median) is the middle value:  
  - If \( N \) is **odd**, the median is the middle value.  
  - If \( N \) is **even**, the median is the average of the two middle values.  

---

## **2. Quartiles**  
**Quartiles** divide a dataset into **four** equal parts.  

| Quartile | Definition | Formula |
|----------|------------|---------|
| **Q1 (First Quartile)** | 25th percentile (1st quarter) | \( Q1 = \frac{N+1}{4} \) |
| **Q2 (Second Quartile)** | 50th percentile (Median) | \( Q2 = \frac{N+1}{2} \) |
| **Q3 (Third Quartile)** | 75th percentile (3rd quarter) | \( Q3 = \frac{3(N+1)}{4} \) |
| **Q4 (Fourth Quartile)** | 100th percentile (max value) | \( Q4 = \max(x) \) |

---

## **3. Interquartile Range (IQR)**  
The **IQR** measures the middle **50% of data**, calculated as:  
\[
IQR = Q3 - Q1
\]

### **Finding Outliers using IQR**  
Outliers are extreme values in data.  
- **Lower Bound** = \( Q1 - 1.5 \times IQR \)  
- **Upper Bound** = \( Q3 + 1.5 \times IQR \)  
- Values **outside this range** are outliers.  

### **Five-Point Summary**  
A summary of a dataset includes:  
1. **Lower Bound** (Min value)  
2. **Q1 (25th percentile)**  
3. **Q2 (50th percentile / Median)**  
4. **Q3 (75th percentile)**  
5. **Upper Bound** (Max value)  

---

## **4. Box Plot (Box-and-Whisker Plot)**  
A **box plot** is a visual representation of a dataset’s **five-number summary**.  

- **The box**: Shows **Q1, Median (Q2), and Q3**  
- **The whiskers**: Extend to the **minimum** and **maximum** values **within the range**  
- **Outliers**: Represented as individual points beyond whiskers  

---

## **5. Deciles**  
**Deciles** divide data into **10 equal parts**, each containing **10% of observations**.

| Decile | Percentile Equivalent |
|--------|----------------------|
| **D1** | 10th percentile |
| **D2** | 20th percentile |
| **D3** | 30th percentile |
| ... | ... |
| **D9** | 90th percentile |
| **D10** | 100th percentile (max value) |

### **Formula for Deciles**  
\[
D_k = \frac{k(N+1)}{10}
\]  
Where \( k = 1,2,3,...,10 \)  

---

## **6. Percentage Change**  
The **percentage change** is the relative difference between two values, expressed as a percentage.

### **Formula**  
\[
\text{Percentage Change} = \frac{\text{New Value} - \text{Old Value}}{\text{Old Value}} \times 100
\]

### **Example**  
If a stock price rises from **₹500** to **₹650**:  
\[
\text{Percentage Change} = \frac{650 - 500}{500} \times 100 = 30\%
\]

---

# **Summary Table**  
| Measure | Definition | Formula |
|---------|------------|---------|
| **Percentile** | Rank-based measure | \( P = \frac{N+1}{100} \times k \) |
| **Quartiles (Q1, Q2, Q3)** | Divide data into 4 equal parts | \( Q1 = 25\%\), \( Q2 = 50\%\), \( Q3 = 75\%\) |
| **IQR** | Measures data spread (middle 50%) | \( IQR = Q3 - Q1 \) |
| **Box Plot** | Graphical representation of five-point summary | Visual tool |
| **Deciles (D1 - D10)** | Divide data into 10 parts | \( D_k = \frac{k(N+1)}{10} \) |
| **Percentage Change** | Measures relative change | \( \frac{\text{New - Old}}{\text{Old}} \times 100 \) |

---

## **Key Takeaways**  
✔ **Percentiles** describe relative standing in a dataset.  
✔ **Quartiles** and **deciles** divide data into equal parts.  
✔ **IQR** helps detect outliers.  
✔ **Box plots** visualize distribution.  
✔ **Percentage change** shows growth or decline.  

# **Relationship Between Two Variables**  

Understanding the **relationship between two variables** is fundamental in data analysis, as it helps in making predictions, identifying trends, and understanding dependencies between data points.

---

## **1. Association Between Two Variables**  

### **Definition**  
- When two variables are related, we say they have an **association**.
- The **direction** and **strength** of the association can be analyzed using **graphs (scatter plots)** and **statistical measures**.

### **Types of Association**  

#### **(i) Positive Association**  
- As one variable **increases**, the other also **increases**.  
- Example: Higher study time → Higher exam scores.  

##### **Strong Positive Association**  
- Data points closely follow an upward trend.  
- Example: Age vs. Salary (generally increases with experience).  

##### **Weak Positive Association**  
- Data points show a vague upward trend but are more spread out.  
- Example: Number of hours spent studying vs. slight improvement in grades.  

#### **(ii) Negative Association**  
- As one variable **increases**, the other **decreases**.  
- Example: Increase in exercise → Decrease in body fat percentage.  

##### **Strong Negative Association**  
- Data points closely follow a downward trend.  
- Example: Temperature vs. Demand for winter clothes.  

##### **Weak Negative Association**  
- Data points show a general downward trend but are more scattered.  
- Example: Increase in screen time vs. Slight decrease in sleep quality.  

#### **(iii) No Association**  
- No visible pattern between the two variables.  
- Example: Height vs. Favorite color.  

---

## **2. Covariance**  

### **Definition**  
Covariance measures **how two variables change together**.

- **Positive Covariance**: Both variables increase or decrease together.  
- **Negative Covariance**: One variable increases while the other decreases.  
- **Zero Covariance**: No relationship between the variables.  

### **Formula**  
For two variables \(X\) and \(Y\) with \(N\) observations:  
\[
\text{Cov}(X,Y) = \frac{\sum (X_i - \bar{X})(Y_i - \bar{Y})}{N}
\]
Where:  
- \(X_i, Y_i\) = Data points.  
- \(\bar{X}, \bar{Y}\) = Mean of \(X\) and \(Y\).  
- \(N\) = Number of observations.  

#### **Limitations of Covariance**  
- Covariance values depend on the scale of variables, making them difficult to interpret.  
- To make it more meaningful, we use **correlation**.

---

## **3. Correlation**  

### **Definition**  
- **Correlation** measures **both direction and strength** of the relationship between two variables.  
- **Standardized** version of covariance, ranging from **-1 to +1**.

---

### **(i) Pearson's Correlation Coefficient (\(r\))**  
- Measures **linear relationships** between variables.  
- Values range between **-1 and +1**:  

| \( r \) Value  | Meaning |
|--------------|---------|
| \( r = +1 \) | Perfect positive correlation |
| \( 0.5 \leq r < 1 \) | Strong positive correlation |
| \( 0 < r < 0.5 \) | Weak positive correlation |
| \( r = 0 \) | No correlation |
| \( -0.5 < r < 0 \) | Weak negative correlation |
| \( -1 < r \leq -0.5 \) | Strong negative correlation |
| \( r = -1 \) | Perfect negative correlation |

### **Formula for Pearson's Correlation**  
\[
r = \frac{\text{Cov}(X,Y)}{\sigma_X \sigma_Y}
\]  
Where:  
- \(\sigma_X\) and \(\sigma_Y\) are standard deviations of \(X\) and \(Y\).  

### **Example**  
- Height & Weight: \( r = 0.8 \) (Strong Positive Correlation).  
- Hours of sleep & Stress level: \( r = -0.6 \) (Strong Negative Correlation).  

---

### **(ii) Spearman's Rank Correlation Coefficient (\(\rho\))**  
- Measures **monotonic relationships** (not necessarily linear).  
- Useful for **ordinal data** (e.g., rankings).  

#### **Formula**  
\[
\rho = 1 - \frac{6 \sum d_i^2}{N(N^2 - 1)}
\]
Where:  
- \( d_i \) = Difference between ranks of \(X\) and \(Y\).  
- \( N \) = Number of observations.  

#### **When to Use Spearman’s Instead of Pearson’s?**  
| **Case** | **Use Pearson** | **Use Spearman** |
|----------|---------------|-----------------|
| Linear Relationship | ✅ | ❌ |
| Monotonic but Non-linear | ❌ | ✅ |
| Outliers Present | ❌ | ✅ |
| Ordinal Data (Ranks) | ❌ | ✅ |

### **Example of Spearman's Rank Correlation**  
- **Customer Satisfaction Ratings vs. Product Quality**  
- **Teacher’s Rating of Students vs. Students' Exam Scores**  

---

# **Summary Table**
| Concept | Definition | Formula / Key Points |
|---------|------------|---------------------|
| **Association** | Relationship between two variables | Can be positive, negative, or no association. |
| **Covariance** | Measures how two variables move together | \(\text{Cov}(X,Y) = \frac{\sum (X_i - \bar{X})(Y_i - \bar{Y})}{N}\) |
| **Pearson's Correlation** | Measures linear relationship | \( r = \frac{\text{Cov}(X,Y)}{\sigma_X \sigma_Y} \) |
| **Spearman's Correlation** | Measures rank-based relationships | \( \rho = 1 - \frac{6 \sum d_i^2}{N(N^2 - 1)} \) |

---

# **Key Takeaways**  
✔ **Positive correlation** means both variables increase together.  
✔ **Negative correlation** means one increases while the other decreases.  
✔ **Pearson’s correlation** is used for linear relationships.  
✔ **Spearman’s correlation** is used for ranked or non-linear relationships.  

# **Probability Theory**  

Probability is the branch of mathematics that deals with **quantifying uncertainty**. It helps in understanding **how likely an event is to occur** in a given situation.  

---

## **1. Basic Probability Concepts**  

### **(i) Experiment**  
An **experiment** is any process that leads to a well-defined result.  
📌 **Example**: Tossing a coin, rolling a die, or drawing a card from a deck.  

### **(ii) Random Experiment**  
An experiment is **random** if its outcome **cannot be predicted with certainty** but follows a probability distribution.  
📌 **Example**: Tossing a fair coin (outcome: heads or tails).  

### **(iii) Sample Space (\(S\))**  
The **sample space** is the set of all possible outcomes of an experiment.  
📌 **Example**:  
- Tossing a coin: \( S = \{H, T\} \)  
- Rolling a die: \( S = \{1, 2, 3, 4, 5, 6\} \)  

### **(iv) Event (\(E\))**  
An **event** is a subset of the sample space, representing a particular outcome or a combination of outcomes.  
📌 **Example**:  
- Getting an even number when rolling a die: \( E = \{2, 4, 6\} \).  

---

## **2. Probability Formula**  
The probability of an event \(E\) is given by:  
\[
P(E) = \frac{\text{Number of favorable outcomes}}{\text{Total number of outcomes in sample space}}
\]  
📌 **Example**: Probability of rolling a 3 on a fair die:  
\[
P(3) = \frac{1}{6}
\]

### **(i) Probability Complement**  
The **complement** of an event \(E\) (denoted as \(E^C\)) is the probability that **event \(E\) does not occur**.  
\[
P(E^C) = 1 - P(E)
\]  
📌 **Example**: Probability of **not rolling a 3** on a fair die:  
\[
P(3^C) = 1 - \frac{1}{6} = \frac{5}{6}
\]

---

## **3. Probability Rules**  

### **(i) Multiplication (Product) Rule**  
- If two events **A** and **B** are **independent** (i.e., one does not affect the other), then:  
\[
P(A \cap B) = P(A) \times P(B)
\]  
📌 **Example**: Rolling a **die** and flipping a **coin**:  
\[
P(rolling\ 6\ \cap\ getting\ heads) = \frac{1}{6} \times \frac{1}{2} = \frac{1}{12}
\]

### **(ii) Addition Rule**  
- If two events **A** and **B** are **mutually exclusive** (cannot happen at the same time), then:  
\[
P(A \cup B) = P(A) + P(B)
\]  
📌 **Example**: Probability of rolling a **2 or 5** on a die:  
\[
P(2 \cup 5) = \frac{1}{6} + \frac{1}{6} = \frac{2}{6} = \frac{1}{3}
\]  

- If **A** and **B** are **not mutually exclusive**, then:  
\[
P(A \cup B) = P(A) + P(B) - P(A \cap B)
\]

---

## **4. Types of Events**  

### **(i) Mutually Exclusive Events**  
- Two events are **mutually exclusive** if they **cannot occur simultaneously**.  
📌 **Example**: Drawing a **heart** or a **club** from a single card draw.  

### **(ii) Non-Mutually Exclusive Events**  
- Two events are **non-mutually exclusive** if they **can occur together**.  
📌 **Example**: Drawing a **red card** and a **king** from a deck (since we can draw a red king).  

### **(iii) Independent Events**  
- Two events are **independent** if the occurrence of one does **not affect** the occurrence of the other.  
📌 **Example**: Tossing a coin and rolling a die.  

### **(iv) Dependent Events**  
- Two events are **dependent** if the occurrence of one event **affects** the occurrence of another.  
📌 **Example**: Drawing **two cards** without replacement.  

### **(v) Exhaustive Events**  
- A set of events is **exhaustive** if their union covers the entire sample space.  
📌 **Example**: Rolling a die → {1,2,3,4,5,6} (All possible outcomes).  

#### **Collectively Exhaustive But Not Mutually Exclusive**  
- Events that cover all possible outcomes but overlap.  
📌 **Example**:  
- Event A = Getting an even number {2,4,6}.  
- Event B = Getting a prime number {2,3,5}.  
- Together they cover {2,3,4,5,6}, which **is not the entire sample space**.  

#### **Both Collectively Exhaustive and Mutually Exclusive**  
- Events cover all possible outcomes and do not overlap.  
📌 **Example**: Rolling a die and defining:  
  - A = Rolling an even number {2,4,6}.  
  - B = Rolling an odd number {1,3,5}.  
- Together, they cover {1,2,3,4,5,6} **without overlapping**.

---

## **5. Probability + Combinatorics**  

- **Counting**: Uses **multiplication, permutations, and combinations** to find total outcomes.  
- **Permutations & Combinations**:  
  - **Permutations** (order matters) → \( P(n, r) = \frac{n!}{(n-r)!} \).  
  - **Combinations** (order doesn’t matter) → \( C(n, r) = \frac{n!}{r!(n-r)!} \).  
- **Probability Questions**:  
  - Example: Probability of choosing **3 committee members from 10**?  
    \[
    P = \frac{C(10,3)}{C(20,3)}
    \]  

---

## **6. Conditional Probability**  
- Probability of event **A** occurring **given** that event **B** has already occurred.  
\[
P(A | B) = \frac{P(A \cap B)}{P(B)}
\]  
📌 **Example**:  
- Probability of drawing **2 aces** in a row from a deck (without replacement):  
\[
P(A_2 | A_1) = \frac{3}{51}
\]  

---

## **7. Law of Total Probability**  
- If \(\{B_1, B_2, ..., B_n\}\) is a **partition** of sample space \(S\), then for any event \(A\):  
\[
P(A) = \sum P(A | B_i) P(B_i)
\]  
📌 **Example**:  
- Probability of a student **passing** given different preparation levels.

---

## **8. Bayes' Theorem**  
- Used to update probabilities **given new evidence**.  
\[
P(B_i | A) = \frac{P(A | B_i) P(B_i)}{\sum P(A | B_j) P(B_j)}
\]  
📌 **Example**:  
- If **90% of students pass** after preparing and **50% fail** without preparation, what’s the probability a student **prepared given that they passed**?

---

## **Final Summary**  
| Concept | Formula / Definition |
|---------|---------------------|
| Probability | \( P(E) = \frac{\text{Favorable Outcomes}}{\text{Total Outcomes}} \) |
| Complement | \( P(E^C) = 1 - P(E) \) |
| Multiplication Rule | \( P(A \cap B) = P(A) P(B) \) (if independent) |
| Addition Rule | \( P(A \cup B) = P(A) + P(B) - P(A \cap B) \) |
| Conditional Probability | \( P(A | B) = \frac{P(A \cap B)}{P(B)} \) |
| Bayes' Theorem | \( P(B_i | A) = \frac{P(A | B_i) P(B_i)}{\sum P(A | B_j) P(B_j)} \) |

