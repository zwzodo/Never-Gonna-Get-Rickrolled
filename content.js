(() => {
    // Define blocked ids. Hardcoded for now, working on changing that.
    const blockedIds = [
        'dQw4w9WgXcQ',
        '-51AfyMqnpI',
        'oHg5SJYRHA0',
        'cvh0nX08nRw',
        'V-_O7nl0Ii0',
        '2ocykBzWDiM',
        'j5a0jTc9S10',
        'HPk-VhRjNI8',
        'IO9XlQrEt2Y',
        'QB7ACr7pUuE',
        'iik25wqIuFo',
        'zL19uMsnpSU',
        'rTgj1HxmUbg',
        'xvFZjo5PgG0',
        '8ybW48rKBME',
        'ub82Xb1C8os',
        'j8PxqgliIno',
        'j7gKwxRe7MQ',
        'th0pH9srXRY',
        'gPkZS92WCIo',
        'ENYalQvZG4Q',
        'QhuZIEkKkXA',
        'SjTOn5scRmY',
        'XfIIQYnBHrQ',
        '6_b7RDuLwcI',
        'G8iEMVr7GFg',
        'AyOqGRjVtls',
        '6mhmcwmgWbA',
        'H01BwSD9eyQ',
        'nrsnN23tmUA',
        '8mkofgRW1II',
        'rAx5LIul1N8',
        'sO4wVSA9UPs',
        'rrs0B_LM898',
        'doEqUhFiQS4',
        'epyRUp0BhrA',
        'uK5WDo_3s7s',
        'wzSVOcgKq04',
        '7B--1KArxow',
        'ptw2FLKXDQE',
        'E50L-JYWm3w',
        '8leAAwMIigI',
        'wzSVOcgKq04',
        'ByqFY-Boq5Y',
        'E4ihJMQUmUQ',
        'cjBHXvBYw5s',
        'xaazUgEKuVA',
        'Uj1ykZWtPYI',
        'EE-xtCF3T94',
        'O7nl0Ii0',
        'cqF6M25kqq4',
        '0SoNH07Slj0',
        'xfr64zoBTAQ',
        'j5a0jTc9S10',
        'dPmZqsQNzGA',
        'nHRbZW097Uk',
        'BjDebmqFRuc',
        'Gc2u6AFImn8',
        '8VFzHYtOARw',
        'cSAp9sBzPbc',
        'Dx5i1t0mN78',
        'Oo0twK2ZbLU',
        'cvh0nX08nRw',
        'lXMskKTw3Bc',
        '7z_1E8VGJOw',
        'VgojnNgmgVs',
        '5wOXc03RwVA',
        'LLFhKaqnWwk',
        'eBGIQ7ZuuiU',
        'oADU2PIzhD0',
        'H8ZH_mkfPUY',
        'GtL1huin9EE',
        'QMW4AqbuSGg',
        'o-YBDTqX_ZU',
        '1V_aE_Xdde8',
        'GtL1huin9EE',
        'bkOVXdvijmQ',
 	  'mTXzFkYX7-g',
        '34Ig3X59_qA',
        'lYBUbBu4W08',
        'xsrVWXm1J64',
        'mCdA4bJAGGk',
        'GHMjD0Lp5DY',
        'rTga41r3a4s',
        'QdezFxHfatw',
        'Nd9CdngQvrY',
        'qbnt_vmk4fU',
        'pzYpHXCumII',
        'gzbvh1UELY',
        'DMH6tx74F80',
        'dJRsWJqDjFE',
	  '2v39YzT8AAQ',
	  'lPYwcTDVRAg',
	  'ehpH-rbnolc',
	  'cErgMJSgpv0',
	  'IdkCEioCp24',
	  'Nd9CdngQvrY',
	  'qbnt_vmk4fU',
	  'pzYpHXCumII',
	  'gzbvh1UELYg',
	  'DMH6tx74F80',
	  'dJRsWJqDjFE',
	  'ur560pZKRfg',
        'rickroll',
        'rick-astley',
        'rick_astley',
        'rick astley',
        'rick-roll',
        'rick roll',
 	  'rick_roll',
        'LXONhtCmN32YU',
        'justin-uhYPkjP03h9RvVdazZ',
        'week-roll-watts',
        'week roll watts',
        'week roll-watts',
        'week-roll watts',
        'rick%20roll',
        'mtdv.me',
        '.news.rr.nihalnavath.com/',
        '.rr.noordstar.me/',
        'rcikroll',
        'new-project.cimlah.art/',
        '.latlmes.com/',
        'Hardest-Riddle-EVER',
        '.customrickroll.github.io/',
        'never-gonna-give-you-up',
        'never gonna give you-up',       
        'never gonna give-you-up',
        'never-gonnagive-you-up',              
        'never-gonna-give you up',       
        'never gonna give you up',
        'best-rickroll-links',
        'RvBwypGUkPo'   

    ];

    // We grab the storage every time in case an id gets added while we're browsing (futureproofing)
    const checkLink = () => chrome.storage.local.get(['disabled', 'bypassed', 'total'], res => {
        // Check if blocking is enabled and if url in blocked links
        if (!res.disabled && blockedIds.find(i => location.href.includes(i))) {
            // Update total rickrolls blocked counter
            chrome.storage.local.set({ total: (res.total || 0) + 1 })

            // If not bypassed (user clicked continue), show warning page
            if (!res.bypassed) {
                location = chrome.runtime.getURL('warn/warn.html') + '?' + location.href;
            } else {
                chrome.storage.local.set({ bypassed: false })
            }
        }
    });

    // Make sure we're not already on a blocked link
    checkLink();

    // Hook into youtube navigation event
    addEventListener('yt-navigate-start', checkLink);
})();
