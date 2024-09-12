.DEFAULT_GOAL := v2-install

v2-install:
	cd v2/cmd/wails && go install
v2-test:
	# modify test path to run test in the given folder
	cd v2/internal/binding/binding_test && go test
