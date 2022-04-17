async function enviarScript(scriptText){
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line),
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)

	if(!textarea) throw new Error("Não há uma conversa aberta")

	for(const line of lines){
		console.log(line)

		textarea.textContent = line
		textarea.dispatchEvent(new InputEvent("input", { bubbles: true }));

		(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click()
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250))
	}

	return lines.length
}

enviarScript(`
오빤 강남스타일
강남스타일
낮에는 따사로운 인간적인 여자
커피 한잔의 여유를 아는 품격 있는 여자
밤이 오면 심장이 뜨거워지는 여자
그런 반전 있는 여자
나는 사나이
낮에는 너만큼 따사로운 그런 사나이
커피 식기도 전에 원샷 때리는 사나이
밤이 오면 심장이 터져버리는 사나이
그런 사나이
아름다워 사랑스러워
그래 너 hey 그래 바로 너 hey
아름다워 사랑스러워
그래 너 hey 그래 바로 너 hey
지금부터 갈 때까지 가볼까
오빤 강남스타일
강남스타일 오-오-오-오 오빤강남스타일
강남스타일 오-오-오-오 오빤강남스타일
Eh, sexy lady
오-오-오-오 오빤 강남스타일
Eh, sexy lady
오-오-오-오
정숙해 보이지만 놀 땐 노는 여자
이때다 싶으면 묶었던 머리 푸는 여자
가렸지만 웬만한 노출보다 야한 여자
그런 감각적인 여자
나는 사나이
점잖아 보이지만 놀 땐 노는 사나이
때가 되면 완전 미쳐버리는 사나이
근육보다 사상이 울퉁불퉁한 사나이
그런 사나이
아름다워 사랑스러워
그래 너 hey 그래 바로 너 hey
아름다워 사랑스러워
그래 너 hey 그래 바로 너 hey
지금부터 갈 데까지 가볼까
오빤 강남 스타일
강남스타일 오-오-오-오 오빤 강남스타일
강남스타일 오-오-오-오 오빤 강남스타일
Eh, sexy lady
오-오-오-오 오빤 강남스타일
Eh, sexy lady
오-오-오-오
뛰는 놈 그 위에 나는 놈
Baby baby, 나는 뭘 좀 아는 놈
뛰는 놈 그 위에 나는 놈
Baby baby, 나는 뭘 좀 아는 놈
(You know what I'm sayin'?)
오빤 강남스타일
Eh, sexy lady
오-오-오-오 오빤 강남스타일
Eh, sexy lady
오-오-오-오 오빤 강남스타일
오빤 강남스타일
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
