const plans = document.querySelectorAll(".plan-option");
const Cost = document.querySelector(".plan-cost h1");
const Details = document.querySelector(".plan-details h4");

plans.forEach((plan) => {
  plan.addEventListener("click", () => {    
    const price = plan.getAttribute("data-price");    
    Cost.textContent = `₹${price}`;
    Details.textContent = `What's included on ${plan.textContent}`;
  });
});