function toggleDetail(section) {
    const details = {
        crypto: "We use crypto payments like XRP, ETH, and BTC to help users eliminate debt while gaining financial freedom.",
        auto: "Our system automates debt payoff with recurring crypto contributions from your wallet, aligned to your goals.",
        growth: "As your crypto appreciates, we use optimized scheduling to maximize both growth and debt payoff."
    };

    const element = document.getElementById(section + '-detail');
    element.innerText = element.innerText === "Click to learn more" ? details[section] : "Click to learn more";
}
