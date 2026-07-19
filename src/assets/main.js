(function initMira() {
  const chatLog = document.getElementById("chat-log");
  const form = document.getElementById("consult-form");
  const input = document.getElementById("user-input");
  const startButtons = document.querySelectorAll("[data-start-consult]");
  const promptChips = document.querySelectorAll("[data-prompt]");

  if (!chatLog || !form || !input) {
    return;
  }

  let busy = false;

  function scrollChatToEnd() {
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function appendMessage(role, html) {
    const article = document.createElement("article");
    article.className = `msg msg-${role}`;
    article.innerHTML = `<span class="msg-meta">${role === "mira" ? "Mira" : "You"}</span>${html}`;
    chatLog.appendChild(article);
    scrollChatToEnd();
    return article;
  }

  function formatReply(reply) {
    const points = (reply.points || [])
      .map((point) => `<li>${escapeHtml(point)}</li>`)
      .join("");
    return `<p>${escapeHtml(reply.lead)}</p><ul>${points}</ul>`;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function showTyping() {
    const el = appendMessage(
      "mira",
      '<span class="typing" aria-label="Mira is typing"><i></i><i></i><i></i></span>'
    );
    el.dataset.typing = "true";
    return el;
  }

  function respondTo(text) {
    const match = window.miraMatchTopic(text);
    return formatReply(match.reply);
  }

  async function handleUserMessage(rawText) {
    const text = String(rawText || "").trim();
    if (!text || busy) {
      return;
    }

    busy = true;
    appendMessage("user", `<p>${escapeHtml(text)}</p>`);
    input.value = "";

    const typing = showTyping();
    const delay = 550 + Math.min(900, text.length * 8);

    await wait(delay);

    if (typing.isConnected) {
      typing.remove();
    }

    appendMessage("mira", respondTo(text));
    busy = false;
    input.focus();
  }

  function wait(ms) {
    return new Promise((resolve) => {
      window.setTimeout(resolve, ms);
    });
  }

  function goToConsult() {
    const consult = document.getElementById("consult");
    if (consult) {
      consult.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    window.setTimeout(() => input.focus(), 400);
  }

  form.addEventListener("submit", function onSubmit(event) {
    event.preventDefault();
    handleUserMessage(input.value);
  });

  input.addEventListener("keydown", function onKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleUserMessage(input.value);
    }
  });

  startButtons.forEach((button) => {
    button.addEventListener("click", goToConsult);
  });

  promptChips.forEach((chip) => {
    chip.addEventListener("click", function onChipClick() {
      const prompt = chip.getAttribute("data-prompt");
      goToConsult();
      handleUserMessage(prompt);
    });
  });

  appendMessage("mira", `<p>${escapeHtml(window.MiraKnowledge.welcome)}</p>`);
})();
