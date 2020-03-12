def test_case(solution, string, map, expected):
  assert solution(string, map) == expected
  print("Test case: sliding_window({}, {}) == {} passed".format(string, str(map), expected))

def run_test(solution):
  test_case(solution, "adddddbcbba", {'a','b','c'}, 4)
  test_case(solution, "abc", {'a','b','c'}, 3)
  test_case(solution, "abdddddcbeba", {'a', 'b', 'c'}, 5)
  test_case(solution, "abweweffawefcaaaaboiwuroqiwuroiueeeb", {'a', 'b', 'c'}, 6)
