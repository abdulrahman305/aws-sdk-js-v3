// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DescribeBudgetRequest, DescribeBudgetResponse } from "../models/models_0";
import { de_DescribeBudgetCommand, se_DescribeBudgetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBudgetCommand}.
 */
export interface DescribeBudgetCommandInput extends DescribeBudgetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBudgetCommand}.
 */
export interface DescribeBudgetCommandOutput extends DescribeBudgetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a budget.</p>
 *          <important>
 *             <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const input = { // DescribeBudgetRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
 * };
 * const command = new DescribeBudgetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBudgetResponse
 * //   Budget: { // Budget
 * //     BudgetName: "STRING_VALUE", // required
 * //     BudgetLimit: { // Spend
 * //       Amount: "STRING_VALUE", // required
 * //       Unit: "STRING_VALUE", // required
 * //     },
 * //     PlannedBudgetLimits: { // PlannedBudgetLimits
 * //       "<keys>": {
 * //         Amount: "STRING_VALUE", // required
 * //         Unit: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     CostFilters: { // CostFilters
 * //       "<keys>": [ // DimensionValues
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CostTypes: { // CostTypes
 * //       IncludeTax: true || false,
 * //       IncludeSubscription: true || false,
 * //       UseBlended: true || false,
 * //       IncludeRefund: true || false,
 * //       IncludeCredit: true || false,
 * //       IncludeUpfront: true || false,
 * //       IncludeRecurring: true || false,
 * //       IncludeOtherSubscription: true || false,
 * //       IncludeSupport: true || false,
 * //       IncludeDiscount: true || false,
 * //       UseAmortized: true || false,
 * //     },
 * //     TimeUnit: "DAILY" || "MONTHLY" || "QUARTERLY" || "ANNUALLY", // required
 * //     TimePeriod: { // TimePeriod
 * //       Start: new Date("TIMESTAMP"),
 * //       End: new Date("TIMESTAMP"),
 * //     },
 * //     CalculatedSpend: { // CalculatedSpend
 * //       ActualSpend: {
 * //         Amount: "STRING_VALUE", // required
 * //         Unit: "STRING_VALUE", // required
 * //       },
 * //       ForecastedSpend: {
 * //         Amount: "STRING_VALUE", // required
 * //         Unit: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     BudgetType: "USAGE" || "COST" || "RI_UTILIZATION" || "RI_COVERAGE" || "SAVINGS_PLANS_UTILIZATION" || "SAVINGS_PLANS_COVERAGE", // required
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     AutoAdjustData: { // AutoAdjustData
 * //       AutoAdjustType: "HISTORICAL" || "FORECAST", // required
 * //       HistoricalOptions: { // HistoricalOptions
 * //         BudgetAdjustmentPeriod: Number("int"), // required
 * //         LookBackAvailablePeriods: Number("int"),
 * //       },
 * //       LastAutoAdjustTime: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBudgetCommandInput - {@link DescribeBudgetCommandInput}
 * @returns {@link DescribeBudgetCommandOutput}
 * @see {@link DescribeBudgetCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>We can’t locate the resource that you specified.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of API requests has exceeded the maximum allowed API request throttling limit
 *       for the account.</p>
 *
 * @throws {@link BudgetsServiceException}
 * <p>Base exception class for all service exceptions from Budgets service.</p>
 *
 */
export class DescribeBudgetCommand extends $Command<
  DescribeBudgetCommandInput,
  DescribeBudgetCommandOutput,
  BudgetsClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeBudgetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBudgetCommandInput, DescribeBudgetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBudgetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DescribeBudgetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBudgetServiceGateway",
        operation: "DescribeBudget",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeBudgetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBudgetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBudgetCommandOutput> {
    return de_DescribeBudgetCommand(output, context);
  }
}
