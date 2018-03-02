const interval_sec = 5*60

function get_today_string() {
  return moment().format("YYYY/MM/DD")
}

function refresh_badge(total_min) {
  const hour = (Math.floor(total_min*1.0 / 60) % 10)
  const min = Math.floor(total_min - hour*60)
  const prefix_for_min = (min >= 10 ? "" : "0")

  const badge_text = `${hour}:${prefix_for_min}${min}`

  // Show hhmm for badge
  chrome.browserAction.setBadgeText({
    text: badge_text
  });
}

function call_if_you_recently_accessed_internet(callback) {
  const query = {
    text: "",
    startTime: (new Date())*1 - interval_sec*1000,
    endTime: (new Date())*1,
    maxResults: 1,
  };

  chrome.history.search(query, function(result){
    if(result.length > 0){
      callback()
    }
  })
}

document.addEventListener('DOMContentLoaded', function () {
  var sum_each_day = {}

  setInterval(function(){
    call_if_you_recently_accessed_internet(function() {
      const today_str = get_today_string()

      if(sum_each_day[today_str] == undefined){ sum_each_day[today_str] = 0 }
      sum_each_day[today_str] += 1

      const num = sum_each_day[today_str]
      const min = Math.floor((num*interval_sec)*1.0/60)

      refresh_badge(min)
    })

  }, interval_sec*1000)
});

refresh_badge(0)
